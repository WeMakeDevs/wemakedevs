"use client";

import Footer from "@/components/Footer";
import {
	HackathonCard,
	HackathonCardDates,
	HackathonCardDescription,
	HackathonCardImage,
	HackathonCardTitle,
} from "@/components/HackathonCard";
import HackathonStatus from "@/components/HackathonStatus";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import { hackathons } from "@/constants/hackathons";
import { useMemo } from "react";

const Hackathons = () => {
	const { upcomingHackathons, previousHackathons } = useMemo(() => {
		const now = new Date();
		const upcoming = hackathons
			.filter(hackathon => {
				if (hackathon.listAs === "previous") return false;
				if (hackathon.listAs === "upcoming") return true;
				const endDate = new Date(hackathon.endDate);
				return endDate >= now;
			})
			.sort((a, b) => {
				const dateA = new Date(a.startDate);
				const dateB = new Date(b.startDate);
				return dateA.getTime() - dateB.getTime();
			});
		const previous = hackathons.filter(hackathon => {
			if (hackathon.listAs === "previous") return true;
			if (hackathon.listAs === "upcoming") return false;
			const endDate = new Date(hackathon.endDate);
			return endDate < now;
		});
		return { upcomingHackathons: upcoming, previousHackathons: previous };
	}, []);

	return (
		<>
			<Navbar />
			<main className="py-20">
				<ViewContainer className="my-10">
					{/* Upcoming Hackathons Section */}
					{upcomingHackathons.length > 0 && (
						<section className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
								Upcoming Hackathons
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 auto-rows-fr">
								{upcomingHackathons.map(hackathon => (
									<HackathonCard
										key={hackathon.slug}
										href={hackathon.slug}
										hrefType={hackathon.hrefType}
									>
										<HackathonCardImage
											src={hackathon.thumbnail}
											alt={hackathon.title}
										/>
										<HackathonCardTitle>
											{hackathon.title}
										</HackathonCardTitle>
										<div className="flex justify-between items-center">
											<HackathonStatus
												startDate={hackathon.startDate}
												endDate={hackathon.endDate}
											/>
											<HackathonCardDates
												startDate={hackathon.startDate}
												endDate={hackathon.endDate}
												showDate={hackathon.showDate}
											/>
										</div>
										<HackathonCardDescription>
											{hackathon.description}
										</HackathonCardDescription>
									</HackathonCard>
								))}
							</div>
						</section>
					)}

					{/* Previous Hackathons Section */}
					{previousHackathons.length > 0 && (
						<section>
							<h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
								Previous Hackathons
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 auto-rows-fr">
								{previousHackathons.map(hackathon => (
									<HackathonCard
										key={hackathon.slug}
										href={hackathon.slug}
										hrefType={hackathon.hrefType}
									>
										<HackathonCardImage
											src={hackathon.thumbnail}
											alt={hackathon.title}
										/>
										<HackathonCardTitle>
											{hackathon.title}
										</HackathonCardTitle>
										<div className="flex justify-between items-center">
											<HackathonStatus
												startDate={hackathon.startDate}
												endDate={hackathon.endDate}
											/>
											<HackathonCardDates
												startDate={hackathon.startDate}
												endDate={hackathon.endDate}
												showDate={hackathon.showDate}
											/>
										</div>
										<HackathonCardDescription>
											{hackathon.description}
										</HackathonCardDescription>
									</HackathonCard>
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

export default Hackathons;
