import type { IconType } from "@icons-pack/react-simple-icons";
import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type navLinksType = {
	name: string;
	url: string;
	type: "link" | "button";
	openInNewTab?: boolean;
}[];

export type numbersType = {
	name: string;
	number: number;
	icon: IconType;
	color: string;
	prefix?: string;
	suffix?: string;
}[];

export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

type HackathonStatusType = "upcoming" | "ongoing" | "ended";

type PrizeType = {
	name: string;
	prize?: string;
	description?: string;
};

type ScheduleItem = {
	title: string;
	time?: string; // ISO 8601 - optional for text items
	description?: string;
	link?: {
		name: string;
		url: string;
	};
	links?: Array<{
		platform: string;
		url: string;
	}>;
	// Note: If link is present, it's an event; if not, it's text
};

export type ScheduleElement = {
	date: string; // ISO 8601
	items: ScheduleItem[];
};

export interface OtherProjectInterface {
	projectTitle: string;
	githubLink: string;
	teamName: string;
	isSolo: boolean;
}

interface ProjectInterface extends OtherProjectInterface {
	description: string;
}

interface WinningProjectInterface extends ProjectInterface {
	category: {
		title: string;
		bgColor?: string; // HEX
		textColor?: string; // HEX
		borderColor?: string; // HEX
	};
}

export interface HackathonProjectCardInterface
	extends GeneralComponent,
		ProjectInterface {}

export interface HackathonWinningProjectCardInterface
	extends GeneralComponent,
		WinningProjectInterface {}

export interface HackathonData {
	title: string;
	image: {
		thumbnail: StaticImageData;
		cover: StaticImageData;
	};
	prize: string;
	type: string;
	startDate: string;
	endDate: string;
	description: string;
	slug: string;
	overview: string;
	resources: string;
	rules: string;
	sponsor?: string;
	judgingCriteria?: string;
	prizes: {
		winning: PrizeType[];
		other: PrizeType[];
		giveaway?: PrizeType[];
	};
	registrationLink: string;
	submissionLink?: string;
	schedule: ScheduleElement[];
	projects?: {
		showcase: WinningProjectInterface[];
		top?: ProjectInterface[];
		all?: OtherProjectInterface[];
	};
	googleCalendarLink?: string;
	hackathonCtas: {
		nav?: {
			href: string;
			label: string;
		};
		main: {
			href: string;
			label: string;
		};
	};
}

export interface HackathonCardType extends GeneralComponent {
	href: string;
	hrefType?: "internal" | "external";
	showDate?: boolean;
}

export interface HackathonCardImageType extends GeneralComponent {
	src: StaticImageData;
	alt: string;
}

export interface HackathonStatusComponentInterface extends GeneralComponent {
	startDate: string;
	endDate: string;
}

export interface HackathonCardDatesType extends GeneralComponent {
	startDate: string;
	endDate: string;
	showDate?: boolean;
}

export interface HackathonDateInterface extends GeneralComponent {
	startDate: string;
	endDate: string;
}

export type PageType =
	| "overview"
	| "schedule"
	| "register"
	| "submit"
	| "resources"
	| "rules"
	| "projects"
	| "contributors"
	| "starter-template";

export interface HackathonNavInterface extends GeneralComponent {
	slug: string;
	page: PageType;
}

export interface HackathonCoverImageInterface extends GeneralComponent {
	src: StaticImageData;
	alt: string;
}

export interface TestimonialInterface {
	profileImage: StaticImageData;
	name: string;
	platform: "twitter" | "linkedin";
	testimonialText: string;
}

export type TestimonialCardType = GeneralComponent & TestimonialInterface;

export interface MeetupData {
	title: string;
	image: StaticImageData;
	date: string;
	description: string;
	url: string;
	location: string;
}

export interface MeetupCardInterface extends MeetupData {
	className?: string;
}

export type FooterSocialLink = {
	name: string;
	href: string;
	icon: IconType;
};

type FooterLink = {
	name: string;
	href: string;
	opensInNewTab?: boolean;
};

export type FooterLinkSection = {
	title: string;
	links: FooterLink[];
};

export type PartnerData = {
	image: StaticImageData;
	logo: StaticImageData;
	name: string;
	quote: string;
	author: string;
	logoClassName?: string;
};

export type FaqType = {
	question: string;
	answer: string;
};

export type NumbersShowcaseType = {
	name: string;
	number: number;
	icon: IconType;
	color: string;
	prefix?: string;
	suffix?: string;
};

export type NumbersShowcaseCardType = GeneralComponent & NumbersShowcaseType;

export type JobCardType = {
	title: string;
	description: string;
	location: string;
	salary?: string;
	workingHours?: string;
	responsibilities?: string[];
	prerequisites: string[];
	goodToHave?: string[];
	type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
	postedDate: string;
	applicationDeadline?: string;
	benefits?: string[];
	applyLink: string;
	applyEmail?: string;
	applySubject?: string;
	applyDetails?: string[];
};

export interface InitiativeData {
	title: string;
	description: string;
	image: StaticImageData;
	url: string;
}

export interface InitiativeCardInterface extends InitiativeData {
	className?: string;
}

export interface InitiativeCardType extends GeneralComponent {
	href: string;
}

export interface InitiativeCardImageType extends GeneralComponent {
	src: StaticImageData;
	alt: string;
}
