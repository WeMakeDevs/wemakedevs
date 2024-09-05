import { useState, useEffect } from "react";

interface TimeDifference {
  daysStartToNow: number;
  hoursStartToNow: number;
  daysEndToNow: number;
  hoursEndToNow: number;
}

interface HackathonStatus {
  status: "upcoming" | "ongoing" | "ended";
  timeDifference: TimeDifference;
}

const useHackathonStatus = (
  startDate: string,
  endDate: string,
): HackathonStatus => {
  const [status, setStatus] = useState<HackathonStatus>({
    status: "upcoming",
    timeDifference: {
      daysStartToNow: 0,
      hoursStartToNow: 0,
      daysEndToNow: 0,
      hoursEndToNow: 0,
    },
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const start = new Date(startDate);
      const end = new Date(endDate);

      const calculateDifference = (
        date: Date,
      ): { days: number; hours: number } => {
        const diff = date.getTime() - now.getTime();
        const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        return { days, hours };
      };

      let currentStatus: "upcoming" | "ongoing" | "ended";
      if (now < start) {
        currentStatus = "upcoming";
      } else if (now > end) {
        currentStatus = "ended";
      } else {
        currentStatus = "ongoing";
      }

      const startDiff = calculateDifference(start);
      const endDiff = calculateDifference(end);

      setStatus({
        status: currentStatus,
        timeDifference: {
          daysStartToNow: startDiff.days,
          hoursStartToNow: startDiff.hours,
          daysEndToNow: endDiff.days,
          hoursEndToNow: endDiff.hours,
        },
      });
    };

    updateStatus();
    const timer = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  return status;
};

export { useHackathonStatus };
