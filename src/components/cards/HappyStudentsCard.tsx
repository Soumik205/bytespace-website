import { StarSmallIcon } from "@/components/icons/Icons";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { learnerAvatars } from "@/content/landing";
import { cn } from "@/lib/utils";

// Each copy of this card in the design has its own spacing and colors.
const variants = {
  hero: {
    card: "bg-white",
    title: "leading-[1.2]",
    rating: "text-xs",
    score: "",
    star: "text-lime",
    count: "",
  },
  creators: {
    card: "bg-white",
    title: "leading-normal",
    rating: "text-2xs",
    score: "font-bold",
    star: "text-lime",
    count: "",
  },
  auth: {
    card: "bg-lime",
    title: "leading-normal",
    rating: "text-2xs",
    score: "font-bold",
    star: "text-primary",
    count: "bg-ink text-surface",
  },
};

type HappyStudentsCardProps = {
  className?: string;
  variant?: keyof typeof variants;
  reviewsClassName?: string;
};

export function HappyStudentsCard({
  className,
  variant = "hero",
  reviewsClassName = "text-muted",
}: HappyStudentsCardProps) {
  const styles = variants[variant];

  return (
    <div
      className={cn(
        "w-[258px] rounded-2xl p-4 text-ink",
        styles.card,
        className,
      )}
    >
      <p className={cn("text-base font-medium", styles.title)}>
        Happy Students
      </p>
      <p className={cn("flex items-center", styles.rating)}>
        <span className={styles.score}>4.5&nbsp;</span>
        <span className={reviewsClassName}>(240)</span>
        <StarSmallIcon className={cn("size-4", styles.star)} />
      </p>
      <AvatarStack
        avatars={learnerAvatars}
        count="2K+"
        size={43}
        className="mt-2 -space-x-4"
        countClassName={cn("font-bold", styles.count)}
      />
    </div>
  );
}
