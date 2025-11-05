import { DATA as agenthackData } from "@/app/hackathons/agenthack25/data";
import { DATA as futurestackaiData } from "@/app/hackathons/futurestack25/data";
import { images as futurestackaiImages } from "@/app/hackathons/futurestack25/images";
import hackfrost24Data from "@/app/hackathons/hackfrost24/data";
import { DATA as lingohackData } from "@/app/hackathons/lingohack25/data";
import { images as lingohackImages } from "@/app/hackathons/lingohack25/images";
import { DATA as openSourceFestData } from "@/app/hackathons/opensourcefest25/data";
import { images as openSourceFestImages } from "@/app/hackathons/opensourcefest25/images";
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
		slug: lingohackData.slug,
		title: "MultilingualHack 2025",
		description: lingohackData.descriptionCard,
		thumbnail: lingohackImages.thumbnail,
		startDate: lingohackData.startDate,
		endDate: lingohackData.endDate,
	},
	{
		slug: "opensourcefest25",
		title: "Open Source Fest",
		description:
			"A month-long challenge where you'll contribute to real-world open source projects",
		thumbnail: openSourceFestImages.thumbnail,
		startDate: openSourceFestData.startDate,
		endDate: openSourceFestData.endDate,
	},
	{
		slug: "futurestack25",
		title: "FutureStack 2025",
		description:
			"Biggest hackathon yet in collaboration with Cerebras, Meta & Docker!",
		thumbnail: futurestackaiImages.thumbnail,
		startDate: futurestackaiData.startDate,
		endDate: futurestackaiData.endDate,
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
