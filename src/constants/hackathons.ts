import { DATA as agenthackData } from "@/app/hackathons/agenthack25/data";
import { thumbnail as futurestackaiThumbnail } from "@/app/hackathons/futurestack-ai/images";
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
		slug: "futurestack-ai",
		title: "FutureStack GenAI",
		description:
			"Biggest hackathon yet in collaboration with Cerebras, Meta & Docker!",
		thumbnail: futurestackaiThumbnail,
		startDate: "2026-09-10",
		endDate: "2026-09-10",
		showDate: false,
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
