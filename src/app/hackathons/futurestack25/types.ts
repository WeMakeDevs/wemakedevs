export type FuturestackScheduleLink = {
	platform: "youtube" | "linkedin" | string;
	url: string;
};

export type FuturestackScheduleItem = {
	title: string;
	description?: string;
	time?: string; // ISO string
	links?: FuturestackScheduleLink[];
};

export type FuturestackScheduleElement = {
	date: string; // ISO string
	items: FuturestackScheduleItem[];
};
