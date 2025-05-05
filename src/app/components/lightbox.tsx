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
          className="rounded-t-xl shadow-[0_0_1rem_1rem_#2e389f] hover:cursor-pointer relative object-fill flex 
          justify-center overflow-visible bg-[#2e389f]"
          onClick={() => setOpen(true)}
        >
          <div className="absolute top-[0] -translate-y-2/5 h-[120px] w-[120px] sm:h-[160px] sm:w-[160px]">
            <Image src="/play-button.svg" alt="Play Button" fill />
          </div>
          <Image
            src="/lightbox-desktop.webp"
            alt="Desktop View"
            width={1000}
            height={500}
            className="rounded-t-xl hidden lg:inline-block"
          />
          <Image
            src="/lightbox-tablet.webp"
            alt="Tablet View"
            width={750}
            height={572}
            className="rounded-t-xl hidden sm:inline-block lg:hidden"
          />
          <Image
            src="/lightbox-mobile.webp"
            alt="Mobile View"
            width={400}
            height={400}
            className="rounded-t-xl inline-block sm:hidden"
          />
        </button>
        <figcaption className="sr-only">Different daily.dev viewports.</figcaption>
      </figure>
      <dialog
        ref={dialog}
        aria-modal="true"
        aria-labelledby="lightboxDialogHeading"
        className="fixed min-w-screen min-h-screen z-10 bg-transparent justify-center items-center duration-1000 
        transition-opacity backdrop:bg-[hsl(0,0%,0%,0.8)]"
      >
        <button
          type="button"
          aria-label="Close Lightbox"
          className="absolute top-8 right-8 text-foreground opacity-70 text-2xl font-bold hover:cursor-pointer h-8 w-8
          flex justify-center items-center text-center hover:opacity-100 transition-opacity"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <div className="absolute w-full h-auto aspect-video max-w-[1000px] px-4">
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
            className="w-full h-full"
          />
        </div>
      </dialog>
    </>
  );
}
