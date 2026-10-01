import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarStackProps = {
  avatars: string[];
  count: string;
  size: number;
  className?: string;
  countClassName?: string;
};

export function AvatarStack({
  avatars,
  count,
  size,
  className,
  countClassName,
}: AvatarStackProps) {
  return (
    <div className={cn("flex", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full object-cover"
          style={{ width: size, height: size }}
        />
      ))}
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full bg-lime text-xs text-ink",
          countClassName,
        )}
        style={{ width: size, height: size }}
      >
        {count}
      </span>
    </div>
  );
}
