import Image from "next/image";

import { PanelHeading } from "@/components/course/PanelHeading";
import { CheckCircleIcon } from "@/components/icons/Icons";
import type { CourseDetail } from "@/content/courses";

export function AboutPanel({ course }: { course: CourseDetail }) {
  const { description, sneakPeek, keyPoints } = course.about;

  return (
    <div className="pt-10 pb-16 xl:pb-16">
      <PanelHeading>Description</PanelHeading>
      <div className="mt-6 flex max-w-[722px] flex-col gap-[26px] text-base leading-[26px] text-ink-soft">
        {description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <PanelHeading className="mt-6">Sneak Peak</PanelHeading>
      <ul className="mt-6 grid grid-cols-2 gap-[19px] sm:grid-cols-4">
        {sneakPeek.map((image, index) => (
          <li
            key={image.src}
            className="relative aspect-[167/125] overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={`Course preview ${index + 1}`}
              fill
              sizes="(min-width: 640px) 167px, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <PanelHeading className="mt-6">Key Points</PanelHeading>
      <ul className="mt-6 flex flex-col gap-3">
        {keyPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-base leading-[26px] text-ink-soft"
          >
            <CheckCircleIcon className="size-6 shrink-0 text-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
