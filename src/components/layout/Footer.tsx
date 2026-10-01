import Link from "next/link";

import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/content/landing";

const linkClasses = "text-ink transition-colors hover:text-primary";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="pt-16 pb-12 lg:pt-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:w-[504px]">
            <Logo className="text-ink" />
            <p className="mt-4 text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <NewsletterForm className="mt-8 lg:mt-[45px]" />
            <p className="mt-6 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:w-[580px]"
          >
            {footerColumns.map((column, index) => (
              <ul
                key={index}
                className="flex flex-col gap-4 text-sm leading-[22px]"
              >
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClasses}>
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
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClasses}>
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
