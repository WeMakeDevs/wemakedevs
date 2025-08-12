import { DATA as agenthackData } from "@/app/hackathons/agenthack/data";
import hackfrost24Data from "@/app/hackathons/hackfrost24/data";
import type { StaticImageData } from "next/image";

type HackathonType = {
	slug: string;
	title: string;
	description: string;
	thumbnail: StaticImageData;
	startDate: string;
	endDate: string;
};

const hackathons: HackathonType[] = [
	{
		slug: agenthackData.slug,
		title: agenthackData.title,
		description: agenthackData.description,
		thumbnail: agenthackData.images.thumbnail,
		startDate: agenthackData.startDate,
		endDate: agenthackData.endDate,
	},
	{
		slug: hackfrost24Data.slug,
		title: hackfrost24Data.title,
		description: hackfrost24Data.description,
		thumbnail: hackfrost24Data.images.thumbnail,
		startDate: hackfrost24Data.startDate,
		endDate: hackfrost24Data.endDate,
	},
];

export { hackathons };
