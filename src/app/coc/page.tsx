import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Code of Conduct | WeMakeDevs",
	description:
		"WeMakeDevs Community Code of Conduct — our commitment to providing a safe, inclusive, respectful, and welcoming environment for all participants.",
};

const CodeOfConduct = () => {
	return (
		<div>
			<Navbar className="z-10" />
			<div className="pt-20 lg:pt-28 z-[1000] flex flex-col min-h-screen">
				<ViewContainer className="grow mb-20">
					<h1 className="font-title text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-8">
						WeMakeDevs Community{" "}
						<span className="text-primary">Code of Conduct</span>
					</h1>

					<div className="mt-10 space-y-10 text-sm sm:text-base font-medium sm:leading-relaxed max-w-4xl">
						{/* 1. Purpose and Scope */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								1. Purpose and Scope
							</h2>
							<p>
								WeMakeDevs is dedicated to providing a safe,
								inclusive, respectful, and welcoming environment
								for all participants, regardless of gender,
								sexual orientation, disability, physical
								appearance, body size, race, nationality,
								religion, or technical experience level.
							</p>
							<p>
								This Code of Conduct applies to all WeMakeDevs
								events, including but not limited to hackathons,
								conferences, meetups, workshops, and webinars,
								whether hosted in-person or virtually. It also
								extends to all official online platforms,
								community forums, chat servers, social media
								channels, and source code repositories associated
								with WeMakeDevs. All participants, including
								attendees, speakers, sponsors, mentors, judges,
								volunteers, and organizers, are required to adhere
								to this Code of Conduct.
							</p>
						</section>

						{/* 2. Expected Behavior */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								2. Expected Behavior
							</h2>
							<p>
								To foster a collaborative and positive ecosystem,
								all community members are expected to:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Exercise consideration and respect in their
									speech and actions.
								</li>
								<li>
									Attempt collaboration before conflict.
								</li>
								<li>
									Refrain from demeaning, discriminatory, or
									harassing behavior and speech.
								</li>
								<li>
									Be mindful of their surroundings and of
									their fellow participants.
								</li>
								<li>
									Support fellow community members and
									constructive development practices.
								</li>
								<li>
									Respect the intellectual property and
									technical contributions of other
									participants.
								</li>
							</ul>
						</section>

						{/* 3. Unacceptable Behavior */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								3. Unacceptable Behavior
							</h2>
							<p>
								WeMakeDevs maintains a zero-tolerance policy for
								harassment and exclusionary behavior. Unacceptable
								behaviors include, but are not limited to:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Intimidating, harassing, abusive,
									discriminatory, derogatory, or demeaning
									speech, materials, or conduct.
								</li>
								<li>
									Offensive comments related to gender, gender
									identity, sexual orientation, race, religion,
									disability, or technical proficiency.
								</li>
								<li>
									Inappropriate use of nudity, sexual images,
									or sexualized language in public spaces,
									presentation decks, project submissions, or
									chat channels.
								</li>
								<li>
									Deliberate intimidation, stalking, or
									following.
								</li>
								<li>
									Harassing photography or recording.
								</li>
								<li>
									Sustained disruption of talks, workshops,
									virtual streams, or other event operations.
								</li>
								<li>
									Unwelcome sexual attention or physical
									contact.
								</li>
								<li>
									Technical sabotage, plagiarism, or the
									intentional distribution of malicious
									software and spam within community platforms.
								</li>
								<li>
									Advocating for, or encouraging, any of the
									above behaviors.
								</li>
							</ul>
						</section>

						{/* 4. Consequences of Unacceptable Behavior */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								4. Consequences of Unacceptable Behavior
							</h2>
							<p>
								Unacceptable behavior from any community member
								will not be tolerated. If a participant engages in
								harassing or non-compliant behavior, WeMakeDevs
								organizers reserve the right to take any action
								they deem appropriate to keep the community safe.
							</p>
							<p>
								Consequences may include, but are not limited to:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									A formal warning to cease the behavior
									immediately.
								</li>
								<li>
									Expulsion from the specific event without a
									refund (if applicable).
								</li>
								<li>
									Immediate disqualification from active
									competitions, hackathons, or prize
									eligibility.
								</li>
								<li>
									Permanent removal from all WeMakeDevs
									digital community spaces, communication
									servers, and future events.
								</li>
								<li>
									Referral to local law enforcement or
									regulatory authorities if necessary.
								</li>
							</ul>
						</section>

						{/* 5. Incident Reporting Guidelines */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								5. Incident Reporting Guidelines
							</h2>
							<p>
								If you experience or witness behavior that
								violates this Code of Conduct, or if you have any
								other concerns, please report it immediately. All
								reports will be handled with the strictest
								confidentiality to protect the reporter.
							</p>
							<h3 className="font-title text-lg sm:text-xl font-semibold">
								How to Report
							</h3>
							<p>
								Please submit all reports in writing via email to
								the WeMakeDevs core team at:{" "}
								<a
									href="mailto:contact@wemakedevs.org"
									className="text-primary underline"
								>
									contact@wemakedevs.org
								</a>
							</p>
							<h3 className="font-title text-lg sm:text-xl font-semibold">
								What to Include
							</h3>
							<p>
								To help us investigate and resolve the issue
								effectively, please include as much detail as
								possible in your email:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Your contact information (name, email
									address, and community handle).
								</li>
								<li>
									The date, time, and location (or digital
									platform link) of the incident.
								</li>
								<li>
									A detailed description of what occurred.
								</li>
								<li>
									The name, handle, or identity of the
									individual(s) involved.
								</li>
								<li>
									Any supporting documentation, such as
									screenshots, direct links to messages, or
									public repository links.
								</li>
								<li>
									The names or handles of any witnesses who
									were present.
								</li>
							</ul>
						</section>

						{/* 6. Our Enforcement Process */}
						<section className="space-y-4">
							<h2 className="font-title text-xl sm:text-2xl font-bold">
								6. Our Enforcement Process
							</h2>
							<p>
								Upon receiving a report, the WeMakeDevs
								management team will take the following steps:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Acknowledgment:</strong> We will
									acknowledge receipt of your report within 24
									hours.
								</li>
								<li>
									<strong>Review:</strong> The core organizing
									team will review the details and investigate
									the incident impartially.
								</li>
								<li>
									<strong>Action:</strong> If the behavior is
									found to violate our standards, the team
									will implement appropriate consequences
									immediately.
								</li>
								<li>
									<strong>Follow-Up:</strong> A member of the
									core team will follow up with the reporter
									to communicate the status or outcome of the
									investigation, subject to privacy
									considerations.
								</li>
							</ul>
							<p className="mt-4 italic">
								We value your presence in our community and thank
								you for your cooperation in keeping WeMakeDevs a
								professional, productive, and safe environment for
								global developers.
							</p>
						</section>
					</div>
				</ViewContainer>
				<Footer />
			</div>
		</div>
	);
};

export default CodeOfConduct;
