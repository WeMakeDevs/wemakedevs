import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { ViewContainer } from "@/components/ui/view-container";
import { CalendarIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

type HackathonHeaderProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	showDate?: boolean;
	cta: {
		label: string;
		href: string;
		openInNewTab?: boolean;
		disabled?: boolean;
	};
};

const HackathonHeader = ({
	title,
	description,
	startDate,
	endDate,
	prize,
	showDate = true,
	cta,
}: HackathonHeaderProps) => {
	return (
		<div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 border-b border-gray-200 overflow-hidden">
			{/* Dotted random background */}
			<div
				className="absolute inset-0 opacity-[0.06]"
				style={{
					backgroundImage: `url(${images.dottedRandom.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			{/* Subtle glow effects */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />

			<ViewContainer className="relative z-10">
				<div className="bg-white border-2 border-gray-200 rounded-3xl p-4 shadow-xl">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-8 bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl">
						<div className="col-span-1 lg:col-span-2">
							{showDate ? (
								<HackathonStatus
									className="w-fit"
									startDate={startDate}
									endDate={endDate}
								/>
							) : (
								<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-lg">
									<span className="animate-pulse">🦸</span>
									ASSEMBLING HEROES
								</div>
							)}
							<h1 className="text-4xl md:text-6xl font-black mt-6 text-gray-900 uppercase tracking-tight">
								<span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
									{title}
								</span>
							</h1>
							<p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed mt-4">
								{description}
							</p>
							<div className="flex items-center gap-4">
								{cta.disabled ? (
									<div className="mt-4 md:mt-6 cursor-not-allowed opacity-60 px-8 py-4 rounded-full font-bold tracking-wide border-2 border-gray-300 bg-gray-100 text-gray-400">
										{cta.label}
									</div>
								) : (
									<Link
										href={cta.href}
										className="mt-4 md:mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-wide shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all"
										target={
											cta.openInNewTab
												? "_blank"
												: "_self"
										}
										rel={
											cta.openInNewTab
												? "noopener noreferrer"
												: undefined
										}
									>
										<Sparkles className="w-5 h-5" />
										{cta.label}
									</Link>
								)}
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="bg-white rounded-2xl p-5 md:p-6 h-fit w-full border-2 border-gray-200 shadow-lg">
								{showDate ? (
									<>
										<div className="flex gap-4 text-center font-medium">
											<CalendarIcon
												className="text-cyan-500"
												size={30}
											/>
											<p className="text-lg md:text-2xl text-gray-800 font-bold">
												<DateAtom date={startDate} /> -{" "}
												<DateAtom date={endDate} />
											</p>
										</div>
										<HackathonDate
											startDate={startDate}
											endDate={endDate}
										/>
									</>
								) : (
									<>
										<div className="flex gap-4 text-center font-medium items-center justify-center">
											<CalendarIcon
												className="text-cyan-500"
												size={30}
											/>
											<p className="text-lg md:text-2xl text-gray-800 font-bold">
												Coming Soon
											</p>
										</div>
										<div className="font-bold border-2 border-cyan-300 rounded-full text-sm md:text-base px-4 py-2 flex justify-center items-center w-fit gap-2 mt-4 bg-cyan-50 mx-auto text-cyan-600">
											<div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
											Starting Soon
										</div>
									</>
								)}
								<hr className="my-5 border-gray-200" />
								<div className="flex flex-col gap-2 text-gray-800">
									<span className="text-sm uppercase tracking-wide text-cyan-500 font-bold">
										Total Prizes
									</span>
									<span className="text-2xl font-black text-gray-900">
										{prize}
									</span>
									<div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
										<span>+</span>
										<span>Interviews</span>
										<span>+</span>
										<span>Exclusive Swag</span>
										<span>+</span>
									</div>
									<div className="flex items-center gap-2 flex-wrap">
										<Image
											src={images.gsocLogo}
											alt="Google Summer of Code"
											className="h-6 w-auto"
										/>
										<span className="text-sm font-medium text-gray-700">
											Mentorship
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
