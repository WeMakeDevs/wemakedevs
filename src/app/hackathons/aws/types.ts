export type CityId =
	| "bangalore"
	| "delhi"
	| "mumbai"
	| "hyderabad"
	| "chennai"
	| "vegas";

export type TimelineStop = {
	id: CityId | "all";
	stop?: string;
	city: string;
	subtitle: string;
	date?: string;
	blurb: string;
	tags?: string[];
	finale?: boolean;
};

export type BuilderStep = {
	key: "LEARN" | "BUILD" | "SHARE" | "GROW";
	desc: string;
};

export type Faq = {
	q: string;
	a: string;
};
