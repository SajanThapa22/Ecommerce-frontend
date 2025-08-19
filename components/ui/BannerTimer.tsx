"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useTimer } from "@/context/TimerContext";

interface Props {
  sm?: boolean;
  className?: string;
}

const BannerTimer = ({ sm, className }: Props) => {
  const timeLeft = useTimer();

  return (
    <div className={cn(className)}>
      <div className={cn("flex", sm ? "gap-1" : "gap-4")}>
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className={cn(
              "bg-white text-black rounded-full flex flex-col items-center justify-center",
              sm ? "size-9" : "size-16"
            )}
          >
            <span className={cn("font-semibold", sm ? "text-xs" : "text-base")}>
              {timeLeft[unit as keyof typeof timeLeft]}
            </span>
            <span className={cn(sm ? "hidden" : "block text-[11px]")}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTimer;
