import giveawaysThumbnail from "@/app/initiatives/giveaways/images/giveaways-thumbnail.png";
import { images as openSourceFestImages } from "@/app/initiatives/opensourcefest25/images";
import orchestrationThumbnail from "@/app/initiatives/orchestration/images/thumbnail.svg";
import { scholarshipsThumbnail } from "@/assets/images/scholarships";
import type { StaticImageData } from "next/image";

type InitiativeType = {
	title: string;
	description: string;
	image: StaticImageData;
	url: string;
};

const initiatives: InitiativeType[] = [
	{
		title: "Kestra Orchestration Challenge",
		description:
			"Learn workflow orchestration, earn an official Kestra certification for free, and win a MacBook, iPad, iPhone & more. Beginners welcome!",
		image: orchestrationThumbnail,
		url: "/initiatives/orchestration",
	},
	{
		title: "Giveaways",
		description:
			"We regularly give away iPads, Meta Ray-Ban Smart Glasses, and more to our community members. Subscribe to the newsletter to never miss a drop!",
		image: giveawaysThumbnail,
		url: "/initiatives/giveaways",
	},
	{
		title: "Open Source Fest",
		description:
			"A month-long challenge where you'll contribute to real-world open source projects! Work with experienced maintainers, learn industry best practices, and get interview opportunities.",
		image: openSourceFestImages.thumbnail,
		url: "/initiatives/opensourcefest25",
	},
	{
		title: "KubeCon + CNC Europe 2026",
		description:
			"Win a fully sponsored trip to KubeCon Amsterdam! Get your flight, hotel, conference ticket, local transportation, visa assistance, and up to $2000 reimbursement covered.",
		image: scholarshipsThumbnail,
		url: "/initiatives/scholarships",
	},
];

export { initiatives };
