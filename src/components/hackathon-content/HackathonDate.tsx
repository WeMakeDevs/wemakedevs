"use client";
import { cn } from "@/lib/utils";
import { HackathonDateInterface } from "@/types";
import { useHackathonStatus } from "@/lib/hooks";
import { CalendarIcon } from "@radix-ui/react-icons";

const HackathonDate = ({
  startDate,
  endDate,
  className,
  ...props
}: HackathonDateInterface) => {
  const { status, timeDifference } = useHackathonStatus(startDate, endDate);

  const options = {
    day: "numeric" as const,
    month: "short" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    hour12: true, // Set to false if you prefer 24-hour format
  };

  return (
    <div className={cn(className, "flex justify-between")} {...props}>
      <div className="flex gap-4 items-center">
        <CalendarIcon className="size-5" />
        {new Date(startDate).toLocaleString("en-GB", options)} -{" "}
        {new Date(endDate).toLocaleString("en-GB", options)}
      </div>
      <p className="">
        {status == "upcoming" &&
          `Hackathon starts in ${timeDifference.daysStartToNow} days and ${timeDifference.hoursStartToNow} hours`}

        {status == "ongoing" &&
          `Hackathon ends in ${timeDifference.daysEndToNow} days and ${timeDifference.hoursEndToNow} hours`}

        {status == "ended" && "Hackathon has ended"}
      </p>
    </div>
  );
};

export default HackathonDate;
