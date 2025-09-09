import { scholarshipsThumbnail } from "@/assets/images/scholarships";
import type { StaticImageData } from "next/image";

type ScholarshipType = {
	title: string;
	description: string;
	image: StaticImageData;
	url: string;
};

const scholarships: ScholarshipType[] = [
	{
		title: "KubeCon Amsterdam Scholarship",
		description:
			"Win a fully sponsored trip to KubeCon Amsterdam! Get your flight, hotel, conference ticket, local transportation, visa assistance, and up to $2000 reimbursement covered.",
		image: scholarshipsThumbnail,
		url: "/scholarships",
	},
];

export { scholarships };
