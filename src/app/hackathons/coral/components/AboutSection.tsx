import { Anchor, Database, Ship, Skull, Swords, Waves } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6 leading-tight">
						Chart Yer Course, Matey
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Two paths to glory on the high seas of data. Choose your
						adventure and claim your treasure.
					</p>
				</div>

				{/* Two project tracks */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{/* Track 1: Build an Agent */}
					<div className="bg-gradient-to-br from-[#0c1a2e] to-[#0a1525] rounded-2xl border border-amber-500/20 p-8 hover:border-amber-400/40 transition-all group">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-2xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
								<Ship className="w-7 h-7 text-white" />
							</div>
							<div>
								<h3 className="text-2xl font-bold text-amber-400">
									🏴‍☠️ Track 1: Build an Agent
								</h3>
								<p className="text-slate-400 text-sm">
									Captain your own data vessel
								</p>
							</div>
						</div>
						<p className="text-slate-300 leading-relaxed mb-6">
							Build an agent for a real use case that retrieves
							data across multiple sources using Coral. Describe
							how you did it and what makes it great, ideally
							showcasing Coral&apos;s power.
						</p>
						<div className="space-y-3">
							<p className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
								Example Voyages:
							</p>
							<ul className="space-y-3 text-slate-400 text-sm">
								<li className="flex gap-2">
									<Skull
										className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
									/>
									<span>
										<strong className="text-slate-300">
											Coding Agent Debugger
										</strong>{" "}
										Connect GitHub + Sentry + Slack. Agent
										joins failed CI builds with errors and
										Slack discussions to diagnose root cause
										in one query.
									</span>
								</li>
								<li className="flex gap-2">
									<Skull
										className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
									/>
									<span>
										<strong className="text-slate-300">
											AI SRE Investigator
										</strong>{" "}
										Connect PagerDuty + GitHub + Datadog.
										Correlate incidents with PRs and metrics
										to auto-generate incident summaries.
									</span>
								</li>
								<li className="flex gap-2">
									<Skull
										className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
									/>
									<span>
										<strong className="text-slate-300">
											Sprint Health Dashboard
										</strong>{" "}
										Connect Linear + GitHub + Slack. See
										what&apos;s blocked, in review, and
										being discussed in real-time.
									</span>
								</li>
								<li className="flex gap-2">
									<Skull
										className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
									/>
									<span>
										<strong className="text-slate-300">
											Customer Escalation Agent
										</strong>{" "}
										Connect support tool + Sentry + Slack.
										Give support teams full technical
										context without pinging engineering.
									</span>
								</li>
								<li className="flex gap-2">
									<Skull
										className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
									/>
									<span>
										<strong className="text-slate-300">
											Security Monitor
										</strong>{" "}
										Connect GitHub + Slack + Notion.
										Monitor for secrets in commits and flag
										compliance gaps.
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Track 2: Build a Source Connector */}
					<div className="bg-gradient-to-br from-[#0c1a2e] to-[#0a1525] rounded-2xl border border-cyan-500/20 p-8 hover:border-cyan-400/40 transition-all group">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-4 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
								<Anchor className="w-7 h-7 text-white" />
							</div>
							<div>
								<h3 className="text-2xl font-bold text-cyan-400">
									⚓ Track 2: Build a Source Connector
								</h3>
								<p className="text-slate-400 text-sm">
									Expand the Coral reef
								</p>
							</div>
						</div>
						<p className="text-slate-300 leading-relaxed mb-6">
							Connect any API you wish Coral supported. Build a
							custom Coral source for an API that doesn&apos;t
							exist yet. This is a high-value contribution that
							grows the sources ecosystem.
						</p>
						<div className="space-y-3">
							<p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
								How to get started:
							</p>
							<ul className="space-y-3 text-slate-400 text-sm">
								<li className="flex gap-2">
									<Waves
										className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0"
									/>
									<span>
										Follow the{" "}
										<a
											href="https://withcoral.com/docs/guides/write-a-custom-source"
											target="_blank"
											rel="noopener noreferrer"
											className="text-cyan-400 underline hover:text-cyan-300"
										>
											custom source guide
										</a>{" "}
										in the Coral docs
									</span>
								</li>
								<li className="flex gap-2">
									<Waves
										className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0"
									/>
									<span>
										Describe how you built it and what
										challenges you solved
									</span>
								</li>
								<li className="flex gap-2">
									<Waves
										className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0"
									/>
									<span>
										Bonus: build a &quot;wanted&quot; source
										(Hubspot, Asana, Zendesk, Airtable,
										etc.) for extra bounty prizes
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Feature cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="group">
						<div className="flex items-start gap-5">
							<div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-2xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
								<Database className="w-7 h-7 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-amber-400 mb-2">
									Query Anything as SQL
								</h3>
								<p className="text-slate-300 leading-relaxed text-sm">
									Coral lets agents query any API, database,
									or file as SQL tables. No ETL, no
									warehouse, no glue code. Everything stays
									local.
								</p>
							</div>
						</div>
					</div>

					<div className="group">
						<div className="flex items-start gap-5">
							<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-4 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
								<Swords className="w-7 h-7 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-cyan-400 mb-2">
									Cross-Source Joins
								</h3>
								<p className="text-slate-300 leading-relaxed text-sm">
									Join data across GitHub, Slack, Sentry,
									PagerDuty, and more, all in a single SQL
									query. Coral handles auth, pagination, and
									rate limits.
								</p>
							</div>
						</div>
					</div>

					<div className="group">
						<div className="flex items-start gap-5">
							<div className="bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
								<Ship className="w-7 h-7 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-emerald-400 mb-2">
									Win Big Treasure
								</h3>
								<p className="text-slate-300 leading-relaxed text-sm">
									$10,000+ in prizes plus special bounties for
									source connectors, showcase posts, demo
									videos, guides, and referrals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
