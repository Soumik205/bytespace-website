import { StarSmallIcon } from "@/components/icons/Icons";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { learnerAvatars } from "@/content/landing";
import { cn } from "@/lib/utils";

type HappyStudentsCardProps = {
  className?: string;
  // The copy in the creators section has a looser title and a smaller rating line.
  variant?: "hero" | "creators";
};

export function HappyStudentsCard({
  className,
  variant = "hero",
}: HappyStudentsCardProps) {
  const isCreators = variant === "creators";

  return (
    <div
      className={cn("w-[258px] rounded-2xl bg-white p-4 text-ink", className)}
    >
      <p
        className={cn(
          "text-base font-medium",
          isCreators ? "leading-normal" : "leading-[1.2]",
        )}
      >
        Happy Students
      </p>
      <p
        className={cn("flex items-center", isCreators ? "text-2xs" : "text-xs")}
      >
        <span className={cn(isCreators && "font-bold")}>4.5&nbsp;</span>
        <span className="text-muted">(240)</span>
        <StarSmallIcon className="size-4 text-lime" />
      </p>
      <AvatarStack
        avatars={learnerAvatars}
        count="2K+"
        size={43}
        className="mt-2 -space-x-4"
        countClassName="font-bold"
      />
    </div>
  );
}
