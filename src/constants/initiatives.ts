import { images as openSourceFestImages } from "@/app/hackathons/opensourcefest25/images";
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
];

export { initiatives };
