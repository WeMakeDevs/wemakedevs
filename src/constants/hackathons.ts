import { DATA as agenthackData } from "@/app/hackathons/agenthack25/data";
import { images as futurestackaiImages } from "@/app/hackathons/futurestack25/images";
import hackfrost24Data from "@/app/hackathons/hackfrost24/data";
import type { StaticImageData } from "next/image";

type HackathonType = {
	slug: string;
	title: string;
	description: string;
	thumbnail: StaticImageData;
	startDate: string;
	endDate: string;
	showDate?: boolean;
};

const hackathons: HackathonType[] = [
	{
		slug: "futurestack25",
		title: "FutureStack 2025",
		description:
			"Biggest hackathon yet in collaboration with Cerebras, Meta & Docker!",
		thumbnail: futurestackaiImages.thumbnail,
		startDate: "2025-09-29",
		endDate: "2025-10-05",
	},
	{
		slug: agenthackData.slug,
		title: agenthackData.title,
		description: agenthackData.descriptionCard,
		thumbnail: agenthackData.images.thumbnail,
		startDate: agenthackData.startDate,
		endDate: agenthackData.endDate,
	},
	{
		slug: hackfrost24Data.slug,
		title: hackfrost24Data.titleCard,
		description: hackfrost24Data.description,
		thumbnail: hackfrost24Data.images.thumbnail,
		startDate: hackfrost24Data.startDate,
		endDate: hackfrost24Data.endDate,
	},
];

export { hackathons };
