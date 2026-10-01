import { Container } from "@/components/ui/Container";
import { categories } from "@/content/landing";

export function CategoriesSection() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="pt-16 pb-20 lg:pt-[72px] lg:pb-[120px]"
    >
      <Container>
        <div className="text-center">
          <h2
            id="categories-title"
            className="font-display text-[28px]/[1.2] font-semibold tracking-[-0.01em] text-ink-strong lg:text-h3"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-[915px] text-lg text-muted">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
          {categories.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#courses"
                className="flex h-[167px] flex-col items-center rounded-card border border-line pt-[35px] text-xl text-ink transition-colors hover:border-primary"
              >
                <span className="grid size-15 place-items-center rounded-full bg-lime">
                  <Icon className="size-9" />
                </span>
                <span className="mt-2">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
