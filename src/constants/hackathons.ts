import { DATA as accomplishData } from "@/app/hackathons/accomplish/data";
import { images as accomplishImages } from "@/app/hackathons/accomplish/images";
import { DATA as fast2mcpData } from "@/app/hackathons/2fast2mcp/data";
import { images as fast2mcpImages } from "@/app/hackathons/2fast2mcp/images";
import { DATA as agenthackData } from "@/app/hackathons/agenthack25/data";
import { DATA as assemblehackData } from "@/app/hackathons/assemblehack25/data";
import { images as assemblehackImages } from "@/app/hackathons/assemblehack25/images";
import { DATA as futurestackaiData } from "@/app/hackathons/futurestack25/data";
import { images as futurestackaiImages } from "@/app/hackathons/futurestack25/images";
import hackfrost24Data from "@/app/hackathons/hackfrost24/data";
import { DATA as lingohackData } from "@/app/hackathons/lingohack25/data";
import { images as lingohackImages } from "@/app/hackathons/lingohack25/images";
import { DATA as motiahackData } from "@/app/hackathons/motiahack25/data";
import { images as motiahackImages } from "@/app/hackathons/motiahack25/images";
import { DATA as openSourceFestData } from "@/app/hackathons/opensourcefest25/data";
import { images as openSourceFestImages } from "@/app/hackathons/opensourcefest25/images";
import { DATA as tamboData } from "@/app/hackathons/tambo/data";
import { images as tamboImages } from "@/app/hackathons/tambo/images";
import { DATA as visionData } from "@/app/hackathons/vision/data";
import { images as visionImages } from "@/app/hackathons/vision/images";
import {
	cloudNativeHackathonThumbnail,
	kestraHackWeekThumbnail,
	wemakedevsStreamHackathonThumbnail,
} from "@/assets/images";
import type { StaticImageData } from "next/image";

type HackathonType = {
	slug: string;
	title: string;
	description: string;
	thumbnail: StaticImageData;
	startDate: string;
	endDate: string;
	showDate?: boolean;
	hrefType?: "internal" | "external";
};

const hackathons: HackathonType[] = [
	{
		slug: fast2mcpData.slug,
		title: fast2mcpData.title,
		description: fast2mcpData.descriptionCard,
		thumbnail: fast2mcpImages.thumbnail,
		startDate: fast2mcpData.startDate,
		endDate: fast2mcpData.endDate,
	},
	{
		slug: accomplishData.slug,
		title: accomplishData.title,
		description: accomplishData.descriptionCard,
		thumbnail: accomplishImages.thumbnail,
		startDate: accomplishData.startDate,
		endDate: accomplishData.endDate,
	},
	{
		slug: visionData.slug,
		title: visionData.title,
		description: visionData.descriptionCard,
		thumbnail: visionImages.thumbnail,
		startDate: visionData.startDate,
		endDate: visionData.endDate,
	},
	{
		slug: tamboData.slug,
		title: tamboData.title,
		description: tamboData.descriptionCard,
		thumbnail: tamboImages.thumbnail,
		startDate: tamboData.startDate,
		endDate: tamboData.endDate,
	},
	{
		slug: assemblehackData.slug,
		title: assemblehackData.title,
		description: assemblehackData.descriptionCard,
		thumbnail: assemblehackImages.thumbnail,
		startDate: assemblehackData.startDate,
		endDate: assemblehackData.endDate,
		showDate: assemblehackData.showDate,
	},
	{
		slug: motiahackData.slug,
		title: motiahackData.title,
		description: motiahackData.descriptionCard,
		thumbnail: motiahackImages.thumbnail,
		startDate: motiahackData.startDate,
		endDate: motiahackData.endDate,
		showDate: motiahackData.showDate,
	},
	{
		slug: lingohackData.slug,
		title: "MultilingualHack 2025",
		description: lingohackData.descriptionCard,
		thumbnail: lingohackImages.thumbnail,
		startDate: lingohackData.startDate,
		endDate: lingohackData.endDate,
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
		slug: "https://luma.com/cc52l7pn",
		title: "Kestra HackWeek",
		description:
			"Get hands-on experience working with popular open source projects created by top tech companies.",
		thumbnail: kestraHackWeekThumbnail,
		startDate: "2025-06-17T00:00:00Z",
		endDate: "2025-06-22T23:59:59Z",
		hrefType: "external",
	},

	{
		slug: hackfrost24Data.slug,
		title: hackfrost24Data.titleCard,
		description: hackfrost24Data.description,
		thumbnail: hackfrost24Data.images.thumbnail,
		startDate: hackfrost24Data.startDate,
		endDate: hackfrost24Data.endDate,
	},
	{
		slug: "https://wemakedevs-stream.devpost.com/",
		title: "Stream Hackathon",
		description:
			"Meet new people, learn new skills, and push yourself to create something truly innovative!",
		thumbnail: wemakedevsStreamHackathonThumbnail,
		startDate: "2022-12-16T00:00:00Z",
		endDate: "2022-12-18T23:59:59Z",
		hrefType: "external",
	},
	{
		slug: "https://cloudnativehack21.devpost.com/",
		title: "Cloud Native Hack",
		description:
			"Build a cloud-native application using Kubernetes and Cloud Native technologies",
		thumbnail: cloudNativeHackathonThumbnail,
		startDate: "2021-12-10T00:00:00Z",
		endDate: "2021-12-12T23:59:59Z",
		hrefType: "external",
	},
];

export { hackathons };
