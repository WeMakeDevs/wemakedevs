import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rules & Terms · AWS Next Gen Hacks 2026",
	description:
		"Official hackathon rules and terms for AWS Next Gen Hacks 2026, in partnership with WeMakeDevs.",
};

type Item = { term?: string; text: string };
type Section = { n: string; title: string; items: Item[] };

const sections: Section[] = [
	{
		n: "01",
		title: "Team Composition",
		items: [
			{
				term: "Team Size",
				text: "Participants may compete individually or in teams of up to four (4) members. No individual may register or submit projects under multiple teams.",
			},
			{
				term: "Equal Allocation",
				text: "By default, cash prizes, digital assets, or physical rewards awarded to a winning team will be divided and distributed equally among all registered team members.",
			},
			{
				term: "Alternative Arrangement",
				text: "Prizes may be issued in full to a single designated team member if, and only if, all registered members of that team provide explicit, unanimous written consent to the organizing committee prior to disbursement. WeMakeDevs assumes no responsibility for internal disputes regarding prize allocation post-distribution.",
			},
		],
	},
	{
		n: "02",
		title: "Project Scope and Technical Guidelines",
		items: [
			{
				term: "Core Requirement",
				text: "Submissions must consist of original software applications. Physical hardware components are optional and will not grant a competitive advantage over software-only submissions.",
			},
			{
				term: "Code Provenance and Base Frameworks",
				text: "Teams are permitted to utilize open-source starter templates, public boilerplates, and pre-existing codebases to accelerate development.",
			},
			{
				term: "Originality Mandate",
				text: "Submitting a pre-existing project with nominal modifications is strictly prohibited. Evaluation will be based exclusively on the new, original logic, features, and architecture built during the event window.",
			},
		],
	},
	{
		n: "03",
		title: "Timeline and Development Window",
		items: [
			{
				term: "Pre-Event Activity",
				text: "Teams may engage in conceptual planning, strategy formulation, and architectural design prior to the official kickoff. Written notes, wireframes, and system diagrams are fully permitted.",
			},
			{
				term: "Development Window",
				text: "All active coding, programming, UI/UX design implementation, and asset generation must take place strictly within the official hackathon hours.",
			},
		],
	},
	{
		n: "04",
		title: "AWS Eligibility, AI, and Sponsor Tooling",
		items: [
			{
				term: "AWS Builder Center Registration (Mandatory)",
				text: "All participants must create a free AWS Builder ID and sign up for the AWS Builder Center. Registration is required to be eligible for any prize, and proof of sign up may be requested during judging.",
			},
			{
				term: "AWS Usage Requirement (Eligibility)",
				text: "To qualify for prizes, projects must meaningfully build on AWS by using one or more AWS services, products, or APIs. Submissions that do not use AWS are welcome to participate but are not eligible for prizes.",
			},
			{
				term: "AI Tool Integration",
				text: "The utilization of artificial intelligence assistants, automated code generators, and large language models (LLMs) is permitted.",
			},
			{
				term: "Mandatory Disclosure",
				text: "Teams leveraging AI tools must explicitly document and disclose their usage within the final project submission documentation.",
			},
			{
				term: "Sponsor Track Eligibility",
				text: "To qualify for specific sponsor-backed tracks, prizes, or categories, teams must integrate the respective sponsor's tools, APIs, or infrastructure into their project. Access to these technical resources and documentation will be provided at the start of the event.",
			},
		],
	},
	{
		n: "05",
		title: "Submission Integrity and Standards",
		items: [
			{
				term: "Anti-Spam Policy",
				text: "Duplicate submissions, low-effort entries, plagiarized projects, or unrelated spam will result in immediate disqualification.",
			},
			{
				term: "Verification Requirements",
				text: "For professional evaluation, teams must provide a link to a public repository (e.g., GitHub) demonstrating an active commit history during the event, a comprehensive README, and a functional video demonstration of the project.",
			},
		],
	},
	{
		n: "06",
		title: "Intellectual Property (IP)",
		items: [
			{
				term: "Ownership",
				text: "Participants retain full intellectual property ownership of the software and concepts developed during the hackathon. The organizing body claims no proprietary rights or equity over the projects built.",
			},
		],
	},
	{
		n: "07",
		title: "Code of Conduct",
		items: [
			{
				text: "All participants, mentors, judges, and corporate partners are required to adhere to the official WeMakeDevs Community Code of Conduct. By registering for this event, you agree to uphold a professional, safe, and inclusive environment. Review the full policy, enforcement measures, and reporting protocols on our dedicated webpage.",
			},
		],
	},
];

export default function RulesPage() {
	return (
		<main className="pt-28 pb-24 sm:pt-36 sm:pb-32">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<a
					href="/aws"
					className="inline-flex items-center gap-2 text-sm font-mono text-ash transition-colors hover:text-orange"
				>
					<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 18l-6-6 6-6" />
					</svg>
					Back to AWS Next Gen Hacks
				</a>

				<p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-orange">
					The Fine Print
				</p>
				<h1 className="mt-3 font-heading font-black text-heading text-4xl sm:text-5xl tracking-tight">
					Hackathon Rules and Terms
				</h1>
				<p className="mt-4 text-body">
					These rules govern participation in AWS Next Gen Hacks 2026, hosted in
					partnership with WeMakeDevs. By registering, you agree to the terms
					below.
				</p>

				<div className="mt-12 space-y-6">
					{sections.map((s) => (
						<section key={s.n} className="glass rounded-2xl p-6 sm:p-8">
							<div className="flex items-baseline gap-3">
								<span className="font-mono text-sm text-orange">{s.n}</span>
								<h2 className="font-heading text-xl sm:text-2xl font-bold text-heading tracking-tight">
									{s.title}
								</h2>
							</div>
							<ul className="mt-5 space-y-4">
								{s.items.map((item) => (
									<li key={item.text} className="flex gap-3">
										<svg className="mt-1 h-4 w-4 shrink-0 text-orange" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
										</svg>
										<p className="text-sm sm:text-base text-body leading-relaxed">
											{item.term ? (
												<span className="font-heading font-semibold text-heading">
													{item.term}:{" "}
												</span>
											) : null}
											{item.text}
										</p>
									</li>
								))}
							</ul>
						</section>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="/aws#register"
						className="inline-flex items-center gap-2 rounded-lg bg-orange px-7 py-3.5 font-semibold text-ink shadow-lg shadow-orange/25 transition-all duration-200 hover:bg-rust hover:text-white hover:scale-[1.03] active:scale-[0.98]"
					>
						Register for AWS Next Gen Hacks
						<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</a>
				</div>
			</div>
		</main>
	);
}
