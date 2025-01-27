import { useEffect, useState } from "react";

interface TimeDifference {
	daysStartToNow: number;
	hoursStartToNow: number;
	minutesStartToNow: number;
	daysEndToNow: number;
	hoursEndToNow: number;
	minutesEndToNow: number;
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
			minutesStartToNow: 0,
			daysEndToNow: 0,
			hoursEndToNow: 0,
			minutesEndToNow: 0,
		},
	});

	useEffect(() => {
		const updateStatus = () => {
			const now = new Date();
			const start = new Date(startDate);
			const end = new Date(endDate);

			const calculateDifference = (
				date: Date,
			): { days: number; hours: number; minutes: number } => {
				const diff = date.getTime() - now.getTime();
				const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				);
				const minutes = Math.floor(
					(Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60),
				);
				return { days, hours, minutes };
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
					minutesStartToNow: startDiff.minutes,
					daysEndToNow: endDiff.days,
					hoursEndToNow: endDiff.hours,
					minutesEndToNow: endDiff.minutes,
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
