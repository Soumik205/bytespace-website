import Link from "next/link";

import { LogoMark } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-dvh bg-grid">
      <Container className="pb-16 xl:pb-[120px]">
        <header className="flex h-20 items-center xl:block xl:h-auto xl:pt-[35px]">
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="block w-fit xl:ml-0.5"
          >
            <LogoMark className="block h-[31.5px] w-[28.875px] text-lime" />
          </Link>
        </header>
        <main className="xl:mt-[53.5px]">{children}</main>
      </Container>
    </div>
  );
}
