"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

type CreatorStatsProps = {
  products: number;
  followers: number;
};

export function CreatorStats({ products, followers }: CreatorStatsProps) {
  const [following, setFollowing] = useState(false);
  const stats = [
    { value: products, label: "Products" },
    { value: followers + (following ? 1 : 0), label: "Followers" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex h-[46px] items-center gap-2 rounded-full bg-white px-6 text-lg"
          >
            <span className="text-primary">{stat.value}</span>
            <span className="font-medium text-ink">{stat.label}</span>
          </li>
        ))}
      </ul>
      <Button
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
        className="text-ink-strong"
      >
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
