import Image from "next/image";

import { testimonials } from "@/content/landing";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-glow-testimonials py-20 lg:pt-[74px] lg:pb-[57px]"
    >
      <div className="mx-auto w-full max-w-[1204px] px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="testimonials-title"
            className="max-w-[480px] font-display text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-black lg:text-h2"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg text-body lg:w-[584px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.name}>
              <figure className="rounded-card bg-white p-6">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                {/* The second and third cards space the name and role slightly looser in the design. */}
                <figcaption className={index === 0 ? "mt-6" : "mt-[26px]"}>
                  <p className="font-display text-title text-black">
                    {testimonial.name}
                  </p>
                  <p
                    className={cn(
                      "text-lg text-primary",
                      index > 0 && "mt-0.5",
                    )}
                  >
                    {testimonial.role}
                  </p>
                </figcaption>
                <blockquote className="mt-6 text-lg text-body">
                  {testimonial.quote}
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
