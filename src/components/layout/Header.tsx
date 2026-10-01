import Link from "next/link";

import { BagIcon } from "@/components/icons/Icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { authNav, mainNav } from "@/content/landing";
import { cn } from "@/lib/utils";

const linkClasses = "text-base text-surface transition-colors hover:text-lime";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="relative flex h-20 items-center justify-between lg:h-[120px]">
        {/* The logo sits 8px above the line the nav items share. */}
        <Logo className="text-surface lg:ml-0.5 lg:-translate-y-2" />

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex gap-6">
            {mainNav.map((link, index) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    linkClasses,
                    // The design marks "Home" with a medium weight and lifts it 2.5px.
                    index === 0 && "relative -top-[2.5px] font-medium",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {authNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              className={linkClasses}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" aria-label="Cart" className={linkClasses}>
            <BagIcon className="size-6" />
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
