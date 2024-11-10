"use client";

import { cn } from "@/lib/utils";
import { ScheduleElement } from "@/types";
import { Clock, Link2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";

const HackathonScheduleComponent = ({
  schedule,
}: {
  schedule: ScheduleElement[];
}) => {
  const [selectedDate, setSelectedDate] = useState(0);

  const handleDateClick = (index: React.SetStateAction<number>) => {
    setSelectedDate(index);
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata", // Explicitly set IST timezone
  };

  const formatToIST = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleString("en-US", timeOptions);
  };

  return (
    <div className=''>
      <div className='flex justify-center gap-4 mb-6 flex-wrap'>
        {schedule.map((_, index) => (
          <button
            key={index}
            className={cn(
              buttonVariants(),
              "focus:outline-none hover:text-white",
              selectedDate === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            )}
            onClick={() => handleDateClick(index)}
          >
            {new Date(schedule[index].date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })}
          </button>
        ))}
      </div>

      <div className='space-y-8 max-w-3xl mx-auto mt-10'>
        {schedule[selectedDate].items.map((item, index) => (
          <div className='flex gap-8 items-center relative' key={index}>
            {schedule[selectedDate].items.length === 1 ? (
              <></>
            ) : index == 0 ? (
              <div className='absolute h-[100%] w-1 top-1/2 left-[14px] bg-[#d8e6fa] z-0'></div>
            ) : index == schedule[selectedDate].items.length - 1 ? (
              <div className='absolute h-[50%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0'></div>
            ) : (
              <div className='absolute h-[145%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0'></div>
            )}
            <div className='rounded-full p-1.5 bg-blue-300 shadow-lg relative z-10'>
              <div className='rounded-full bg-blue-500 shadow-md h-5 w-5'></div>
            </div>
            <div className='px-4 py-2 ring-2 ring-black/5 w-full hover:ring-accent-4 transition-all'>
              <h3 className='text-lg font-body font-semibold md:text-xl'>
                {item.title}
              </h3>
              <div className='flex gap-2 md:gap-5 items-center font-medium flex-wrap mt-2'>
                <span className='flex gap-2 text-black/75 items-center'>
                  <Clock size={16} />
                  {formatToIST(item.time)} IST
                </span>
                {item.link && (
                  <Link
                    href={item.link.url}
                    className='hover:underline no-underline text-blue-600 flex items-center gap-2'
                  >
                    <Link2 size={16} />
                    {item.link.name}
                  </Link>
                )}
              </div>
              <p className='max-w-2xl text-base md:text-lg font-medium leading-snug md:leading-snug mt-2 text-black/75'>
                {item.description && item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonScheduleComponent;
