import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="rules"
				links={navLinks}
			/>
			<ViewContainer className="my-10">
				<HackathonContentBody>
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							Using Portia is mandatory to be eligible to win
							prizes such as a MacBooks, and swags. Teams not
							using Portia will not qualify for these prizes.
						</li>
						<li>
							All design elements, code, hardware builds, etc.,
							for your project must be created during the event.
							Third-party tools and frameworks, as well as your
							usual tooling, are allowed. While coding cannot
							begin in advance, teams may plan and discuss their
							projects beforehand. Written documents and design
							sketches are permitted. Pre-existing material that
							is freely available to the public, such as public
							domain images, Creative Commons music, open-source
							libraries, existing APIs, and platforms, may be
							incorporated.
						</li>
						<li>
							Projects must involve writing significant software,
							though hardware may be included.
						</li>
						<li>Teams must consist of 1-4 members.</li>
						<li>
							Any intellectual property developed during the
							hackathon will belong to the team that created it.
							Teams are encouraged to have an agreement regarding
							IP, though this is not required.
						</li>
						<li>
							Please treat all participants with respect. Act
							kindly, behave professionally, and refrain from
							insulting or demeaning others. Harassment, as well
							as racist, sexist, or exclusionary jokes, are not
							appropriate. If you witness harassment, please
							notify a hackathon organizer.
						</li>
					</ol>
					<p className="italic mt-6">
						Failure to comply with the above-stated Rules and Code
						of Conduct may result in the offending team's
						disqualification
					</p>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
