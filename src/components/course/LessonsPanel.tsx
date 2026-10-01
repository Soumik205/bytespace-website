import { PanelHeading, PanelText } from "@/components/course/PanelHeading";
import { VideoIcon } from "@/components/icons/Icons";
import type { CourseDetail } from "@/content/courses";

export function LessonsPanel({ course }: { course: CourseDetail }) {
  const { intro, modules, content, progressIntro, progress } = course.lessons;

  return (
    <div className="pt-10 pb-16 xl:pb-[83px]">
      <PanelHeading>Explore the Modules</PanelHeading>
      <PanelText>{intro}</PanelText>

      <PanelHeading className="mt-6">Lesson List</PanelHeading>
      <ol className="mt-[22.7px] flex flex-col gap-[21.4px]">
        {modules.map((module) => (
          <li key={module.title} className="flex items-center gap-[13px]">
            <span className="grid size-[72px] shrink-0 place-items-center rounded-3xl bg-lime text-ink">
              <VideoIcon className="size-10" />
            </span>
            <div>
              <h3 className="text-base font-medium text-ink">{module.title}</h3>
              <p className="text-base leading-[26px] text-ink-soft">
                {module.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <PanelHeading className="mt-[22.7px]">Lesson Content</PanelHeading>
      <PanelText>{content}</PanelText>

      <PanelHeading className="mt-6">Lesson Progress Tracking</PanelHeading>
      <PanelText>{progressIntro}</PanelText>

      <div className="mt-6 rounded-2xl border border-line p-[15px] text-ink">
        <p className="text-sm leading-[1.2] font-medium">Learning Progress</p>
        <p className="mt-2 font-display text-h3">{progress}%</p>
        {/* As in the hero card, the drawn bar runs one percent ahead of the label. */}
        <div className="mt-2 h-2 rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-lime"
            style={{ width: `${progress + 1}%` }}
          />
        </div>
      </div>
    </div>
  );
}
