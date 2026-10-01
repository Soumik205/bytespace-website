import Link from "next/link";

import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/content/landing";
import { cn } from "@/lib/utils";

const linkClasses = "text-ink transition-colors hover:text-primary";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-line", className)}>
      <Container className="pt-16 pb-12 lg:pt-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:w-[504px]">
            <Logo className="text-ink" />
            <p className="mt-4 text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <NewsletterForm className="mt-8 lg:mt-11" />
            <p className="mt-6 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 lg:mt-12 lg:w-[580px]"
          >
            {footerColumns.map((column, index) => (
              <ul
                key={index}
                className="flex flex-col gap-4 text-sm leading-[22px]"
              >
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn("block py-[11px] lg:py-0", linkClasses)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-[22px] text-xs sm:flex-row sm:items-center sm:justify-between lg:mt-[130px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn("block py-3.5 lg:py-0", linkClasses)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
