import type { TestimonialInterface } from "@/types";
import { dev, jay, lekan, manshu } from "./images/testimonials";

export const openMetadataTestimonials: TestimonialInterface[] = [
	{
		profileImage: manshu,
		name: "Manshu",
		platform: "twitter",
		testimonialText:
			"Last 10 days were crazy. Timely completed the project. Had 3 exams in between (2 viva and 1 nptel) but still managed. Honestly worth it. Happy with my performance. Thanks @open_metadata @WeMakeDevs @kunalstwt for the experience! 🙌",
	},
	{
		profileImage: jay,
		name: "Jay Ghiya",
		platform: "twitter",
		testimonialText:
			"Built a prototype integration with @open_metadata for the @WeMakeDevs × @open_metadata hackathon. Developed a custom connector to ingest source-of-truth metadata from repositories — deep-wiki context for humans and agents, and tighter collaboration between data, platform, and engineering teams.",
	},
	{
		profileImage: lekan,
		name: "Lekan",
		platform: "twitter",
		testimonialText:
			"Shipped the first @open_metadata node on @n8n_io as my submission for the @WeMakeDevs hackathon. Went from exploring nodes to actually building my own. Here's to breaking the cycle of half-finished projects 🥂",
	},
	{
		profileImage: dev,
		name: "Dev Grover",
		platform: "twitter",
		testimonialText:
			"Rename a column? FluxGuardian walks @open_metadata's column-level lineage and finds every affected dashboard, pipeline & ML model. Built end-to-end with @Ajays_16 🤝. Huge thanks to @WeMakeDevs × @open_metadata for the platform 🙌",
	},
];
