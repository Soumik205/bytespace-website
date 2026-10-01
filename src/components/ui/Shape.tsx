import Image from "next/image";

import { cn } from "@/lib/utils";

export type ShapeProps = {
  src: string;
  size: number;
  x: number;
  y: number;
  flip?: boolean;
  className?: string;
};

// Decorative 3D shape, positioned with the coordinates from the design frame.
export function Shape({ src, size, x, y, flip, className }: ShapeProps) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      sizes={`${Math.ceil(size)}px`}
      className={cn(
        "pointer-events-none absolute max-w-none select-none",
        flip && "-scale-x-100",
        className,
      )}
      style={{ left: x, top: y, width: size, height: size }}
    />
  );
}
