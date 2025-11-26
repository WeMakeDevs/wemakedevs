import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { ViewContainer } from "@/components/ui/view-container";
import { CalendarIcon, Sparkles } from "lucide-react";
import Link from "next/link";

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
	const cosmicPattern =
		"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3Ccircle cx='50' cy='20' r='1.5'/%3E%3Ccircle cx='20' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

	return (
		<div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-b border-blue-200">
			<div
				className="absolute inset-0 opacity-30"
				style={{ backgroundImage: `url("${cosmicPattern}")` }}
			/>
			{/* Light glow effects */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
			<ViewContainer className="bg-white/80 backdrop-blur border border-blue-200 rounded-2xl p-3 shadow-[0_25px_60px_rgba(59,130,246,0.1)]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 bg-white/90 rounded-xl border border-blue-100">
					<div className="col-span-1 lg:col-span-2">
						{showDate ? (
							<HackathonStatus
								className="w-fit"
								startDate={startDate}
								endDate={endDate}
							/>
						) : (
							<p className="rounded-full px-3 py-1.5 bg-blue-100 text-blue-700 font-mono font-semibold text-sm tracking-wide w-fit border border-blue-300 shadow-sm">
								ASSEMBLE SOON
							</p>
						)}
						<h1 className="text-4xl md:text-6xl font-bold mt-6 text-gray-900 font-mono">
							{title}
						</h1>
						<p className="text-base md:text-lg text-gray-600 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							{cta.disabled ? (
								<div className="mt-4 md:mt-6 cursor-not-allowed opacity-60 px-6 py-3 rounded-lg font-mono tracking-wide border border-blue-300 bg-blue-50 text-gray-400">
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className="mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-mono tracking-wide shadow-lg hover:from-blue-600 hover:to-purple-600 hover:border-blue-600 transition-all"
									target={
										cta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										cta.openInNewTab
											? "noopener noreferrer"
											: undefined
									}
								>
									<Sparkles className="w-4 h-4" />
									{cta.label}
								</Link>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-4 md:p-6 h-fit w-full border border-blue-200">
							{showDate ? (
								<>
									<div className="flex gap-4 text-center font-medium">
										<CalendarIcon
											className="text-blue-600"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-gray-800 font-mono">
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
											className="text-blue-600"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-gray-800 font-mono">
											Coming Soon
										</p>
									</div>
									<div className="font-mono font-medium border border-blue-300 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-blue-50 mx-auto text-blue-700 shadow-sm">
										<div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
										Starting Soon
									</div>
								</>
							)}
							<hr className="my-5 border-blue-200" />
							<div className="flex flex-col gap-1 font-mono text-gray-800">
								<span className="text-sm uppercase tracking-wide text-blue-600">
									Prizes
								</span>
								<span className="text-lg text-gray-900">
									{prize}
								</span>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
