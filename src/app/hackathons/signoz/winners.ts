// Grand track winners of the "Agents of SigNoz" hackathon.
// Source: signoz_winners.csv (the judged submission sheet). Links and names come
// straight from the sheet; the blurbs are condensed from the submitted
// descriptions so the cards stay readable.

export type TrackWinner = {
	project: string;
	builder: string;
	track: string;
	trackLabel: string;
	prize: string;
	accent: string;
	description: string;
	signozUsage: string;
	github: string;
	deployed: string;
	youtube: string;
	blog: string;
};

export const trackWinners: TrackWinner[] = [
	{
		project: "OpenTelemetry Instruments for CrewAI",
		builder: "Srinjoy Roy",
		track: "Track 01",
		trackLabel: "AI & Agent Observability",
		prize: "MacBook Air",
		accent: "#ea6e4a",
		description:
			"OpenTelemetry instrumentation for CrewAI, which ships with no native OTel support. A span per crew run, per agent, and per LLM and tool call, with handoffs modelled as span links.",
		signozUsage:
			"Self-hosted SigNoz via Foundry, used as the real backend for verifying the instrumentation rather than just an export target: the demo crew ran over OTLP/gRPC and every span, nesting level, and handoff link was confirmed in the UI. A dashboard tracks average output tokens per LLM call, and its alert rule was proven to actually fire by lowering the threshold below real usage before restoring it. A genuine SigNoz deployment bug turned up along the way, the collector's OpAmp remote-config channel silently blanking the pipeline config on restart. As a stretch, SigNoz's MCP server was handed to two AI coding agents, and one built a second dashboard from the trace data with no hints.",
		github: "https://github.com/srinjoy356/opentelemetry-instrumentation-crewai",
		deployed: "",
		youtube: "https://youtu.be/S5P4y_yympc",
		blog: "https://medium.com/@srinjoy356/building-opentelemetry-instrumentation-for-crewai-what-deploying-it-to-signoz-actually-taught-me-28fe95eaf5a4",
	},
	{
		project: "DebugProof",
		builder: "Dhruv Sachdev",
		track: "Track 02",
		trackLabel: "Signals & Dashboards",
		prize: "iPad Air",
		accent: "#ffcd56",
		description:
			"A release gate that proves a new build will still be debuggable when it fails. It injects the same failure into a baseline and a candidate, then scores the SigNoz evidence to block the blind one.",
		signozUsage:
			"A self-hosted SigNoz instance is the evidence store for both releases, which send real traces, logs, and metrics over OTLP. Dashboards break down checkout failures and latency by service version, while Trace and Logs Explorer make the regression visible: the baseline has a failing database span and a trace-linked error log, the candidate has neither. DebugProof then queries the same signals through the SigNoz Query Builder API with a read-only service account, keyed on a unique probe ID, so SigNoz powers both the visual investigation and the automated release decision.",
		github: "https://github.com/Dhruv-Sachdev1313/debugproof",
		deployed: "",
		youtube: "https://youtu.be/f3-xbrvceFY",
		blog: "https://dhruvhsachdev.medium.com/the-release-still-returned-the-right-503-it-had-become-harder-to-debug-52f22687fe01",
	},
	{
		project: "RootCause",
		builder: "Shashwat Pratap Singh",
		track: "Track 03",
		trackLabel: "Build Your Own",
		prize: "iPhone Air",
		accent: "#2be38b",
		description:
			"Observability pointed at a hydroponic farm instead of software. Every nutrient-dosing cycle is a trace, plant vitals are golden signals, and a slow leak pages before the tank runs dry.",
		signozUsage:
			"SigNoz is the single source of truth for a farm run like a production service, and RootCause leans on nearly the whole platform. Each dosing cycle is one trace — sensor.read → controller.decide → pump.actuate → sensor.verify — carrying the measured pH/EC and dose volumes as span attributes, alongside 13 gauges, trace-correlated logs, and exceptions recorded on failed cycles. Three dashboards built with the Query Builder mix Value tiles, a Table SLO scorecard, and time-series trends, backed by threshold alerts plus a predictive one that pages when the reservoir has under 3 hours left. Everything is self-hosted and shipped over OTLP, and the fault-injection buttons make every surface light up live during the demo.",
		github: "https://github.com/Shrinet82/rootcause-hydro",
		deployed: "http://20.120.242.78:8099/",
		youtube: "https://youtu.be/BmiloOsssbk",
		blog: "https://medium.com/@shashwat.pratap94550/i-put-a-hydroponic-farm-on-an-sre-dashboard-72300cc3a6c6",
	},
];
