"use client";

import Footer from "@/components/Footer";
import HackathonStatus from "@/components/HackathonStatus";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import { meetups } from "@/constants/meetups";
import { CalendarIcon, MapPin } from "lucide-react";
import type { MeetupData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const MeetupListCard = ({ title, image, url, date, description, location }: MeetupData) => {
	return (
		<Link
			href={url}
			className="rounded group relative shadow-xl hover:shadow-none transition-shadow"
			target="_blank"
			rel="noreferrer noopener"
		>
			<div className="rounded border-4 border-accent-2 p-2 md:p-4 space-y-3 bg-card h-full">
				<Image
					className="aspect-square object-cover rounded w-full"
					src={image}
					alt={title}
				/>
				<h3 className="text-2xl md:text-3xl">{title}</h3>
				<div className="flex flex-col items-start gap-4 justify-between">
					<div className="flex justify-between w-full">
						<HackathonStatus endDate={date} startDate={date} />
						<p className="flex gap-2 items-center font-medium">
							<CalendarIcon size={20} />
							{new Date(date).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								timeZone: "Asia/Kolkata",
								year: "numeric",
							})}
						</p>
					</div>
					<div className="flex gap-2 items-center">
						<MapPin size={20} />
						<span className="font-medium">{location}</span>
					</div>
				</div>
				<p className="leading-snug font-semibold line-clamp-2">
					{description}
				</p>
			</div>
			<div className="absolute bottom-0 left-0 rounded-b group-hover:translate-y-[90%] -z-10 transition-transform w-full bg-accent-2 border-b-4 border-t-4 border-accent-2 font-bold tracking-wider uppercase flex justify-center items-center">
				Explore
			</div>
		</Link>
	);
};

const MeetupsPage = () => {
	const { upcomingMeetups, previousMeetups } = useMemo(() => {
		const now = new Date();
		const upcoming = meetups
			.filter(meetup => {
				const meetupDate = new Date(meetup.date);
				return meetupDate >= now;
			})
			.sort((a, b) => {
				const dateA = new Date(a.date);
				const dateB = new Date(b.date);
				return dateA.getTime() - dateB.getTime();
			});
		const previous = meetups
			.filter(meetup => {
				const meetupDate = new Date(meetup.date);
				return meetupDate < now;
			})
			.sort((a, b) => {
				const dateA = new Date(a.date);
				const dateB = new Date(b.date);
				return dateB.getTime() - dateA.getTime();
			});
		return { upcomingMeetups: upcoming, previousMeetups: previous };
	}, []);

	return (
		<>
			<Navbar />
			<main className="py-20">
				<ViewContainer className="my-10">
					{/* Upcoming Meetups Section */}
					{upcomingMeetups.length > 0 && (
						<section className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
								Upcoming Meetups
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 auto-rows-fr">
								{upcomingMeetups.map(meetup => (
									<MeetupListCard
										key={meetup.title}
										{...meetup}
									/>
								))}
							</div>
						</section>
					)}

					{/* Previous Meetups Section */}
					{previousMeetups.length > 0 && (
						<section>
							<h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
								Previous Meetups
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 auto-rows-fr">
								{previousMeetups.map(meetup => (
									<MeetupListCard
										key={meetup.title}
										{...meetup}
									/>
								))}
							</div>
						</section>
					)}
				</ViewContainer>
				<Footer />
			</main>
		</>
	);
};

export default MeetupsPage;
