"use client";

import Link from "next/link";
import { useRef } from "react";

import { BagIcon, CloseIcon, MenuIcon } from "@/components/icons/Icons";
import { Logo } from "@/components/ui/Logo";
import { authNav, mainNav } from "@/content/landing";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="grid size-11 place-items-center rounded-full text-surface"
      >
        <MenuIcon className="size-7" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-grid p-0 text-surface backdrop:bg-ink/40 open:flex open:flex-col"
      >
        <div className="flex h-20 items-center justify-between px-4 sm:px-6">
          <Logo className="text-surface" />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full"
          >
            <CloseIcon className="size-7" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col gap-8 px-4 pt-8 sm:px-6"
        >
          <ul className="flex flex-col gap-2">
            {mainNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block py-2 font-display text-[32px] font-semibold tracking-[-0.01em]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center gap-3 border-t border-surface/20 pt-8">
            {authNav.map((link, index) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={
                    index === authNav.length - 1
                      ? "inline-flex h-[46px] items-center rounded-full bg-lime px-6 text-lg text-ink"
                      : "inline-flex h-[46px] items-center rounded-full border border-surface/40 px-6 text-lg"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-auto">
              <Link
                href="#"
                onClick={close}
                aria-label="Cart"
                className="grid size-11 place-items-center"
              >
                <BagIcon className="size-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
