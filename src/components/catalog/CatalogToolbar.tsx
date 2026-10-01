import type { CatalogFilters } from "@/components/catalog/useCourseFilters";
import { SelectPill } from "@/components/catalog/SelectPill";
import {
  CategoryIcon,
  FilterIcon,
  SignalIcon,
  SortIcon,
} from "@/components/icons/Icons";
import { chipClasses } from "@/components/ui/Chip";
import { catalogTopics } from "@/content/landing";
import { cn } from "@/lib/utils";

type CatalogToolbarProps = {
  filters: CatalogFilters;
  onChange: (next: Partial<CatalogFilters>) => void;
};

const levelOptions = [
  { value: "", label: "All levels" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];

const sortOptions = [
  { value: "", label: "Most relevant" },
  { value: "az", label: "Title A to Z" },
  { value: "za", label: "Title Z to A" },
];

const topicOptions = catalogTopics.map((topic) => ({
  value: topic,
  label: topic,
}));

export function CatalogToolbar({ filters, onChange }: CatalogToolbarProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            aria-expanded={filters.showTopics}
            aria-controls="catalog-topics"
            onClick={() => onChange({ showTopics: !filters.showTopics })}
            className="inline-flex h-12 items-center gap-1 rounded-full border border-line bg-white px-[15px] text-base font-medium text-ink-soft transition-colors hover:border-ink-soft"
          >
            <FilterIcon className="size-6 text-ink" />
            Filter
          </button>
          <SelectPill
            icon={SignalIcon}
            label="Level"
            value={filters.level}
            options={levelOptions}
            onChange={(level) => onChange({ level })}
          />
          <SelectPill
            icon={CategoryIcon}
            label="Category"
            value={filters.topic === catalogTopics[0] ? "" : filters.topic}
            options={[
              { value: "", label: "All categories" },
              ...topicOptions.slice(1),
            ]}
            onChange={(topic) => onChange({ topic: topic || catalogTopics[0] })}
          />
        </div>
        <SelectPill
          icon={SortIcon}
          label="Most relevant"
          value={filters.sort}
          options={sortOptions}
          onChange={(sort) => onChange({ sort })}
        />
      </div>

      {filters.showTopics && (
        // Topics follow the home page: there is one course list, so a topic is a
        // selection only and does not change the cards.
        <div
          id="catalog-topics"
          role="group"
          aria-label="Topics"
          className="mt-8 flex flex-wrap gap-4 xl:justify-between xl:gap-0"
        >
          {catalogTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={filters.topic === topic}
              onClick={() => onChange({ topic })}
              className={cn(
                chipClasses(filters.topic === topic),
                "px-[16.5px]",
              )}
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
