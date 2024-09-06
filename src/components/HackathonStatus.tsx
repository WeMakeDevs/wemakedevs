"use client";
import { HackathonStatusComponentInterface } from "@/types";
import { cn } from "@/lib/utils";
import { useHackathonStatus } from "@/lib/hooks";

const HackathonStatus = ({
  className,
  startDate,
  endDate,
  ...props
}: HackathonStatusComponentInterface) => {
  const { status } = useHackathonStatus(startDate, endDate);
  return (
    <p
      className={cn(
        className,
        "rounded-full px-2 py-1 bg-primary font-semibold text-sm tracking-wide",
        status == "upcoming" && "bg-[#ee5b24]",
        status == "ongoing" && "bg-[#23a394]",
        status == "ended" && "bg-foreground/10"
      )}
      {...props}
    >
      {status.toUpperCase()}
    </p>
  );
};

export default HackathonStatus;
