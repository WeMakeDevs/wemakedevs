import {
	HackathonContentTitle,
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const linkClass =
	"text-[#ffd778] underline hover:no-underline hover:text-[#ea6e4a]";

const angles = [
	{
		title: "What I built",
		description:
			"Walk through your project, explain the problem, how you built it, outcomes, and what you'd do differently.",
	},
	{
		title: "How to do X",
		description: "A focused tutorial others can follow step by step.",
	},
	{
		title: "What I learned",
		description:
			"A concept, gotcha, or debugging story from the hackathon.",
	},
	{
		title: "Why / my take",
		description:
			"An opinion or comparison backed by real reasoning and examples.",
	},
];

const meaningfulSigns = [
	"It solves a real problem, or explains something that confused you until it clicked.",
	"It includes details only someone who did it would know.",
	"A reader could follow along and get the same result.",
	"It is feature rich (use all relevant SigNoz features).",
	"It has good feedback and a conclusion for the readers.",
];

const notMeaningfulSigns = [
	"It reads like a rewritten version of official documentation.",
	'It\'s all generic statements with no specifics, like: "Observability is very important for modern applications…"',
	"It could have been written by someone who never opened a terminal.",
	"It's obviously AI-generated filler with no real substance behind it.",
];

const structure = [
	{
		title: "Hook (first 2–3 sentences)",
		description:
			"Start with the problem, a surprising fact, or a question. Skip the long intro. Tell the reader what they'll get out of this post.",
	},
	{
		title: "Context (what and why)",
		description:
			"What are you doing, and why does it matter? Keep it short.",
	},
	{
		title: "The Main Body (show your work)",
		description: "The actual steps, code, config, or reasoning.",
	},
	{
		title: "What You Learned / Takeaways",
		description:
			"What worked, what didn't, what you'd tell your past self.",
	},
	{
		title: "Conclusion",
		description:
			"A one-line wrap-up and, where relevant, links to learn more.",
	},
];

const checklist = [
	"I tested the steps/commands I describe.",
	"Technical claims (OpenTelemetry, SigNoz, and others) are checked against official sources.",
	"I have relevant screenshots in my article (SigNoz dashboards look insightful, use them wisely and don't flood the article with just dashboards).",
];

const HackathonBlogGuide = () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0b0c0e] via-[#0e1014] to-[#0b0c0e] min-h-screen [&_h2]:text-[#f5f5f5] [&_h3]:text-[#f5f5f5]">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="blog-guide"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer>
				{/* Intro */}
				<div className="mt-6 mb-2 rounded-2xl px-6 py-6 border border-[#ffcd56]/40 bg-[#ffcd56]/8 shadow-sm">
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<Star className="w-8 h-8 text-[#ffcd56] shrink-0" />
						<div className="flex-1">
							<h1 className="text-2xl md:text-3xl font-bold text-[#f5f5f5]">
								Hackathon Blog Guide and Checklist
							</h1>
							<p className="text-[#c0c1c3] mt-2">
								A short guide to help you write something people
								actually want to read and learn from. Write a
								great blog and win your choice of{" "}
								<span className="text-[#ffcd56] font-semibold">
									AirPods Pro 3 or Beats Powerbeats Pro 2
								</span>
								.
							</p>
						</div>
						<Link
							href={DATA.blogSubmissionUrl || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ffcd56] to-[#d5aa45] hover:opacity-90 transition-opacity text-[#16181d] font-bold"
						>
							Submit Your Blog
							<ArrowUpRight className="w-5 h-5" />
						</Link>
					</div>
				</div>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Writing a Good Blog
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<p>
						You don&apos;t need to be a professional writer. Good
						writing reflects honesty, specificity, and usefulness.
						If a reader finishes your post and thinks &ldquo;I could
						go do this now&rdquo; or &ldquo;I didn&apos;t know
						that,&rdquo; you&apos;ve done it right.
					</p>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					The One Rule: Write From Real Experience
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<p>
						The strongest posts come from something you actually
						did, hit, or figured out and NOT a topic you googled and
						summarized. Whether you&apos;re writing about the
						project you built, an observability concept, or a topic
						of your choice, ground it in your own experience.
					</p>
					<p className="mt-4">
						Ask yourself: &ldquo;What did I learn that I
						couldn&apos;t have gotten by just reading the
						docs?&rdquo; That&apos;s your post.
					</p>
				</HackathonContentBody>

				<HackathonContentTitleH3 className="text-[#f5f5f5] mt-8">
					Signs a post is meaningful
				</HackathonContentTitleH3>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						{meaningfulSigns.map(sign => (
							<li key={sign}>{sign}</li>
						))}
					</ul>
				</HackathonContentBody>

				<HackathonContentTitleH3 className="text-[#f5f5f5] mt-8">
					Signs a post is NOT meaningful (avoid these)
				</HackathonContentTitleH3>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						{notMeaningfulSigns.map(sign => (
							<li key={sign}>{sign}</li>
						))}
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Pick Your Angle
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						{angles.map(angle => (
							<li key={angle.title}>
								<span className="font-semibold text-[#f5f5f5]">
									{angle.title}:
								</span>{" "}
								{angle.description}
							</li>
						))}
					</ul>
					<p className="mt-4">
						Narrow beats broad →{" "}
						<span className="text-[#ffd778]">
							&ldquo;How I instrumented my Flask app with
							OpenTelemetry in 30 minutes&rdquo;
						</span>{" "}
						is far better than{" "}
						<span className="text-[#c0c1c3]">
							&ldquo;A Guide to Observability.&rdquo;
						</span>
					</p>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					A Simple Structure That Works
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ol className="space-y-3 list-decimal list-inside">
						{structure.map(item => (
							<li key={item.title}>
								<span className="font-semibold text-[#f5f5f5]">
									{item.title}:
								</span>{" "}
								{item.description}
							</li>
						))}
					</ol>
					<p className="mt-4">
						Aim for roughly{" "}
						<span className="text-[#ffcd56] font-semibold">
							1000–1500 words
						</span>
						: long enough to be useful, short enough to stay honest.
					</p>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Show, Don&apos;t Just Tell
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>Include real code and config.</li>
						<li>
							Add screenshots like dashboards, traces, and the
							output you got.
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Get Technical Details Right
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<p>
						Readers will try to follow your steps, so accuracy
						matters:
					</p>
					<ul className="space-y-3 list-disc list-inside mt-4">
						<li>
							<span className="font-semibold text-[#f5f5f5]">
								Test what you write:
							</span>{" "}
							If you say a command or config works, make sure it
							actually ran for you.
						</li>
						<li>
							<span className="font-semibold text-[#f5f5f5]">
								Verify claims about tools:
							</span>{" "}
							For OpenTelemetry specifically, check the official
							docs (
							<Link
								href="https://opentelemetry.io"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								opentelemetry.io
							</Link>
							) rather than relying on memory.
						</li>
						<li>
							<span className="font-semibold text-[#f5f5f5]">
								Don&apos;t overstate:
							</span>{" "}
							It&apos;s fine to say &ldquo;this worked for my
							setup&rdquo; instead of claiming it works
							everywhere.
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Things to Avoid
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<span className="font-semibold text-[#f5f5f5]">
								A LinkedIn social post is not a blog.
							</span>{" "}
							Don&apos;t submit one.
						</li>
						<li>
							Publish your blog on a proper blogging platform,{" "}
							<span className="text-[#ffcd56] font-semibold">
								Medium
							</span>
							,{" "}
							<span className="text-[#ffcd56] font-semibold">
								Dev.to
							</span>
							, or{" "}
							<span className="text-[#ffcd56] font-semibold">
								Substack
							</span>{" "}
							are all great choices.
						</li>
						<li>
							How to avoid AI writing:{" "}
							<Link
								href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Signs of AI writing
							</Link>
							.
						</li>
						<li>
							Don&apos;t plagiarize your words and work. Quote and
							link sources instead of copying.
						</li>
						<li>
							Don&apos;t submit raw AI output. Using AI to help
							edit is fine, but submitting generic AI text with no
							real experience behind it is not.
						</li>
						<li>
							Don&apos;t turn it into an ad. Even if SigNoz is
							part of your story, focus on being useful. Genuine
							usefulness is more persuasive than a sales pitch.
						</li>
						<li>
							Don&apos;t bury the point. If your best insight is
							in paragraph 9, move it up.
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Submission Checklist
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3">
						{checklist.map(item => (
							<li key={item} className="flex items-start gap-3">
								<CheckCircle2 className="w-5 h-5 text-[#2be38b] shrink-0 mt-0.5" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</HackathonContentBody>

				<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 bg-[#16181d] rounded-2xl px-6 py-5 border border-[#ffcd56]/50 shadow-sm text-center sm:text-left">
					<Star size={32} className="text-[#ffcd56] shrink-0" />
					<p className="flex-1 font-medium text-[#c0c1c3]">
						Ready to write? Submit your blog before{" "}
						<span className="text-[#ffcd56] font-semibold">
							{DATA.blogWinnersDate}
						</span>{" "}
						to win your choice of AirPods Pro 3 or Beats Powerbeats
						Pro 2.
					</p>
					<Link
						href={DATA.blogSubmissionUrl || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ffcd56] to-[#d5aa45] hover:opacity-90 transition-opacity text-[#16181d] font-bold"
					>
						Submit Your Blog
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonBlogGuide;
