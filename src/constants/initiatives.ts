import { images as openSourceFestImages } from "@/app/hackathons/opensourcefest25/images";
import giveawaysThumbnail from "@/app/giveaways/images/jiten-ipad.png";
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
		title: "Open Source Fest",
		description:
			"A month-long challenge where you'll contribute to real-world open source projects! Work with experienced maintainers, learn industry best practices, and get interview opportunities.",
		image: openSourceFestImages.thumbnail,
		url: "/hackathons/opensourcefest25",
	},
	{
		title: "KubeCon + CNC Europe 2026",
		description:
			"Win a fully sponsored trip to KubeCon Amsterdam! Get your flight, hotel, conference ticket, local transportation, visa assistance, and up to $2000 reimbursement covered.",
		image: scholarshipsThumbnail,
		url: "/scholarships",
	},
	{
		title: "Giveaways",
		description:
			"We regularly give away iPads, Meta Ray-Ban Smart Glasses, and more to our community members. Subscribe to the newsletter to never miss a drop!",
		image: giveawaysThumbnail,
		url: "/giveaways",
	},
];

export { initiatives };
