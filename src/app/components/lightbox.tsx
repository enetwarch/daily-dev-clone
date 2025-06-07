"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Lightbox(): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const handleEscapeKeydown = useCallback((event: KeyboardEvent): void => {
    if (event.code !== "Escape") return;
    setOpen(false);
  }, []);

  const handleOverlayClick = useCallback((event: MouseEvent): void => {
    if (event.target !== dialog.current) return;
    setOpen(false);
  }, []);

  useEffect((): void => {
    if (!dialog.current) return;

    if (open) {
      document.addEventListener("click", handleOverlayClick);
      document.addEventListener("keydown", handleEscapeKeydown);

      dialog.current.showModal();
    } else {
      document.removeEventListener("click", handleOverlayClick);
      document.removeEventListener("keydown", handleEscapeKeydown);

      dialog.current.close();
    }
  }, [open, handleEscapeKeydown, handleOverlayClick]);

  useEffect((): void => {
    if (!dialog.current) return;

    if (open) {
      document.body.classList.remove("overflow-visible");
      document.body.classList.add("overflow-hidden");

      dialog.current.classList.add("flex", "opacity-100");
      dialog.current.classList.remove("hidden", "opacity-0");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("overflow-visible");

      dialog.current.classList.add("hidden", "opacity-0");
      dialog.current.classList.remove("flex", "opacity-100");
    }
  }, [open]);

  return (
    <>
      <figure className="px-4">
        <button
          type="button"
          aria-haspopup="dialog"
          className="relative flex justify-center overflow-visible rounded-t-xl bg-[#2e389f] object-fill shadow-[0_0_1rem_1rem_#2e389f] hover:cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="-translate-y-2/5 absolute top-[0] h-[120px] w-[120px] sm:h-[160px] sm:w-[160px]">
            <Image src="/play-button.svg" alt="Play Button" fill />
          </div>
          <Image
            src="/lightbox-desktop.webp"
            alt="Desktop View"
            width={1000}
            height={500}
            className="hidden rounded-t-xl lg:inline-block"
          />
          <Image
            src="/lightbox-tablet.webp"
            alt="Tablet View"
            width={750}
            height={572}
            className="hidden rounded-t-xl sm:inline-block lg:hidden"
          />
          <Image
            src="/lightbox-mobile.webp"
            alt="Mobile View"
            width={400}
            height={400}
            className="inline-block rounded-t-xl sm:hidden"
          />
        </button>
        <figcaption className="sr-only">Different daily.dev viewports.</figcaption>
      </figure>
      <dialog
        ref={dialog}
        aria-modal="true"
        aria-labelledby="lightboxDialogHeading"
        className="fixed z-10 min-h-screen min-w-screen items-center justify-center bg-transparent transition-opacity duration-1000 backdrop:bg-[hsl(0,0%,0%,0.8)]"
      >
        <button
          type="button"
          aria-label="Close Lightbox"
          className="absolute top-8 right-8 flex h-8 w-8 items-center justify-center text-center font-bold text-2xl text-foreground opacity-70 transition-opacity hover:cursor-pointer hover:opacity-100"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <div className="absolute aspect-video h-auto w-full max-w-[1000px] px-4">
          <h1 id="lightboxDialogHeading" className="sr-only">
            daily.dev web app - All-in-on developer news reader YouTube Video
          </h1>
          <iframe
            src="https://www.youtube.com/embed/igZCEr3HwCg?si=4dAeHay4Ug-E3UUv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </dialog>
    </>
  );
}
