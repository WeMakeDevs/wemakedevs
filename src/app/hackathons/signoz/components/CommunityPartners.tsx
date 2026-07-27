import {
	assetmerkleLogo,
	awsugblrLogo,
	founderLogo,
	kubesimplifyLogo,
	theApiCommunityLogo,
} from "@/assets/images/communityPartners";
import { ViewContainer } from "@/components/ui/view-container";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const partners = [
	{
		name: "Kubesimplify",
		logo: kubesimplifyLogo,
		href: "https://kubesimplify.com/",
	},
	{
		name: "Founder Startup House",
		logo: founderLogo,
		href: "https://www.founderstartuphouse.com/",
	},
	{
		name: "The API Community",
		logo: theApiCommunityLogo,
		href: "https://www.theapicommunity.org/",
	},
	{
		name: "AssetMerkle IGDTUW",
		logo: assetmerkleLogo,
		href: "https://assetmerkleigdtuw.vercel.app/",
	},
	{
		name: "AWS User Group Bengaluru",
		logo: awsugblrLogo,
		href: "https://www.meetup.com/awsugblr/",
	},
];

const CommunityPartners = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="max-w-2xl mb-12">
					<span className="sz-eyebrow">Community partners</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						Communities bringing their people
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						Developer communities, meetup groups and student
						chapters helping spread the word and bringing members
						through the door. Want your community listed? Get in
						touch.
					</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{partners.map(partner => (
						<Link
							key={partner.name}
							href={partner.href}
							target="_blank"
							rel="noopener noreferrer"
							className="dossier-card rounded-xl p-4 flex items-center justify-center min-h-[110px]"
						>
							<div className="flex h-[70px] w-full items-center justify-center rounded-lg bg-white px-3 py-2">
								<Image
									src={partner.logo}
									alt={partner.name}
									className="max-h-[52px] w-auto object-contain"
								/>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-8 flex flex-wrap items-center gap-4">
					<Link
						href="mailto:contact@wemakedevs.org?subject=Community%20partner%20%E2%80%94%20Agents%20of%20SigNoz%20Edition%202"
						className="sz-ghost-btn inline-flex items-center gap-2 rounded-xl border border-[#3c4152] px-6 py-3 font-bold text-[#f5f7fa] transition-all hover:border-[#8b93a7] hover:text-[#f5f7fa]"
					>
						Become a community partner
						<Mail className="h-4 w-4" />
					</Link>
					<span className="text-[13px] text-[#62687c]">
						Partners get tickets for members, a logo slot here, and
						a shout-out from the stage.
					</span>
				</div>
			</ViewContainer>
		</div>
	);
};

export default CommunityPartners;
