"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Speaker, speakers } from "../data";

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
	<div className="dossier-card rounded-2xl overflow-hidden h-full flex flex-col">
		<div className="relative aspect-square overflow-hidden bg-[#101116]">
			<Image
				src={speaker.photo}
				alt={speaker.name}
				placeholder="blur"
				sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
				className="h-full w-full object-cover"
			/>
			{speaker.link && (
				<span className="absolute top-3 right-3 rounded-lg border border-[#3c4152] bg-[#0b0c0e]/80 p-2 text-[#c0c1c3] backdrop-blur-sm">
					<Linkedin className="w-4 h-4" />
				</span>
			)}
		</div>

		<div className="p-5 flex flex-col gap-1 flex-1">
			<span className="text-[15px] font-extrabold text-[#f5f7fa]">
				{speaker.name}
			</span>
			<span className="text-[13.5px] text-[#8b93a7]">{speaker.role}</span>
			<span className="text-[13px] font-semibold text-[#2be38b]">
				{speaker.org}
			</span>
			{speaker.talk && (
				<span className="mt-2.5 border-t border-[#3c4152]/60 pt-2.5 text-[12.5px] leading-snug text-[#c0c1c3]">
					{speaker.talk}
				</span>
			)}
		</div>
	</div>
);

const Speakers = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<span className="inline-flex items-center gap-2 rounded-full border border-[#2be38b]/30 bg-[#2be38b]/10 px-5 py-2 text-sm font-semibold text-[#2be38b]">
						🎤 Featured Speakers
					</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa] glow-orange">
						The People on Stage
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						Practitioners from SigNoz and WeMakeDevs who run this in
						production, plus a community lightning-talk track. More
						names announced closer to the day.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{speakers.map((speaker, i) => (
						<motion.div
							key={speaker.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: (i % 4) * 0.08,
							}}
						>
							{speaker.link ? (
								<Link
									href={speaker.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block h-full"
								>
									<SpeakerCard speaker={speaker} />
								</Link>
							) : (
								<SpeakerCard speaker={speaker} />
							)}
						</motion.div>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default Speakers;
