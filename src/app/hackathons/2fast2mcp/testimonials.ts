import type { TestimonialInterface } from "@/types";
import {
	codezee,
	sri,
	tosif,
	jaya,
	junaid,
} from "./images/testimonials";

export const twoFastTwoMcpTestimonials: TestimonialInterface[] = [
	{
		profileImage: codezee,
		name: "CodeZee",
		platform: "twitter",
		testimonialText:
			"Made my first MCP server for the MCP hackathon and it's a great excitement to see things working. Done with the phase 1 implementation. It can now programmatically fetch EC2 states and CloudWatch metrics directly into an AI context.",
	},
	{
		profileImage: sri,
		name: "Sri",
		platform: "twitter",
		testimonialText:
			"Excited to be building with @archestra_ai bringing in true agent orchestration to Generic AI agents, powerful MCP tools to coordinate with these agents and their complex workflows. Can't wait to ship this project for the #2fast2mcp hackathon!",
	},
	{
		profileImage: tosif,
		name: "Tosif",
		platform: "twitter",
		testimonialText:
			"Just shipped my On-Call Context Builder for the @WeMakeDevs x @archestra_ai hackathon! 🚀 An AI agent that fetches real commits from your repo via MCP and finds the root cause of production incidents automatically.",
	},
	{
		profileImage: jaya,
		name: "Jaya",
		platform: "twitter",
		testimonialText:
			"Built my first AI agent at 2 Fast 2 MCP! 🚀 TestPilot analyzes GitHub commits & tells testers what to re-test. Saves 8+ hrs/week. Built with Archestra + MCP in 3 days. GitHub integration took 5 mins 🔥",
	},
	{
		profileImage: junaid,
		name: "Junaid",
		platform: "twitter",
		testimonialText:
			"Just shipped QueryMaster for the @WeMakeDevs 2 Fast 2 MCP Hackathon 🏁 It lets you query any database using plain English. No SQL needed. Ask: \"top 10 customers by spend\" Get: instant results. Built as an MCP server on @Archestra_ai.",
	},
	{
		profileImage: sri,
		name: "Sri",
		platform: "twitter",
		testimonialText:
			"Built Sentinel using Archestra to orchestrate AI agents that autonomously monitor and stabilize issues in Public utility infrastructure in real time for #2fast2mcp hackathon by @WeMakeDevs. Had a wonderful time building with @archestra_ai.",
	},
];
