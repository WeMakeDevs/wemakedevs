import { marqueeTopics } from "../data";

const Marquee = () => {
	// Rendered twice so the -50% translate loops seamlessly.
	const track = [...marqueeTopics, ...marqueeTopics];

	return (
		<div
			className="border-y border-[#3c4152]/60 bg-[#0b0c0e] overflow-hidden"
			aria-hidden="true"
		>
			<div className="signoz-marquee-track flex w-max">
				{track.map((topic, i) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: the list is duplicated verbatim
						key={`${topic}-${i}`}
						className="flex items-center whitespace-nowrap py-3.5 font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#8b93a7]"
					>
						{topic}
						<span className="mx-6 text-[8px] text-[#e5502a]">
							◆
						</span>
					</span>
				))}
			</div>
		</div>
	);
};

export default Marquee;
