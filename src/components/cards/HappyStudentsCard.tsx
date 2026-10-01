import { StarSmallIcon } from "@/components/icons/Icons";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { learnerAvatars } from "@/content/landing";
import { cn } from "@/lib/utils";

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-[258px] rounded-2xl bg-white p-4 text-ink", className)}
    >
      <p className="text-base leading-[1.2]">Happy Students</p>
      <p className="flex items-center text-xs">
        4.5&nbsp;<span className="text-muted">(240)</span>
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
