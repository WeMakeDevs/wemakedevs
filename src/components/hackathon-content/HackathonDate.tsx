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
    <div className={cn(className, "")} {...props}>
      <div className=''>
        <CalendarIcon className='size-8 text-foreground/70' />
        <p className='mt-4'>
          {new Date(startDate).toLocaleString("en-GB", options)} -{" "}
          {new Date(endDate).toLocaleString("en-GB", options)}
        </p>
      </div>
      <div className='border border-foreground/10 rounded-full text-sm px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4'>
        <div
          className={cn(
            "w-4 h-4 rounded-full",
            status == "ongoing" && "bg-[#23a394]",
            status == "upcoming" && "bg-[#ee5b24]",
            status == "ended" && "bg-foreground/10"
          )}
        ></div>
        {status == "upcoming" &&
          `Hackathon starts in ${timeDifference.daysStartToNow} days and ${timeDifference.hoursStartToNow} hours`}

        {status == "ongoing" &&
          `Hackathon ends in ${timeDifference.daysEndToNow} days and ${timeDifference.hoursEndToNow} hours`}

        {status == "ended" && "Hackathon has ended"}
      </div>
    </div>
  );
};

export default HackathonDate;
