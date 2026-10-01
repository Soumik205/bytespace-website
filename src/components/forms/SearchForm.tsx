import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { cn } from "@/lib/utils";

export function SearchForm({ className }: { className?: string }) {
  return (
    <form
      role="search"
      action="/courses"
      className={cn("flex items-start justify-center gap-4", className)}
    >
      <SearchField
        label="Search courses"
        name="q"
        placeholder="Course, topic, creator"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
