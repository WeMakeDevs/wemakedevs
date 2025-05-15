"use client";

import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { SiDiscord, SiTelegram } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const Newsletter = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			id="join"
			className={cn(
				className,
				"py-8 md:py-12 lg:py-16 before:w-full before:h-1/2 bg-[#172a3b] scroll-m-[100px]",
			)}
			{...props}
		>
			<ViewContainer className="space-y-10">
				<h2 className="text-4xl md:text-5xl text-white text-center border-b sm:border-b-0 border-white/20 pb-4">
					Join Our Community
				</h2>
				<div className="flex justify-between sm:p-6 md:p-8 lg:p-12 shadow-xl sm:bg-gray-50 rounded-[8px] flex-col gap-8">
					<div className="text-center">
						<h2 className="text-2xl md:text-[28px] font-semibold text-white sm:text-black">
							Join the Newsletter
						</h2>
						<p className="font-medium text-white/80 sm:text-gray-500 text-lg md:text-[20px] mt-2">
							Get the latest insights and updates straight to your
							inbox.
						</p>
					</div>
					<div className="w-full">
						<iframe
							title="Newsletter"
							width="100vw"
							height={400}
							className="h-[420px] min-[400px]:h-[400px] min-[570px]:h-[350px]"
							src="https://sibforms.com/serve/MUIFALA912jqnTHNySRo2quOS4yyrcNCA21Nm5FtmEalyN0vbNZ4BPwgcZHijdIW1cNO6aJzyYCtVaAFwzwvs5YrkKusMEKWbZg275CVt843ybVsLUU5Bxh6lJWzF6S6qlLr-VB8Vp7TZHuzqfB9OEzbdWW_Ct3BTmuqL_91uuKUmVSF8layuPrzJwamrfTiuZ-E9CDbXu9T7Zqx"
							frameBorder="0"
							scrolling="auto"
							allowFullScreen
							style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "100%",
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-4 md:gap-10">
					<Link
						href="https://discord.gg/wemakedevs"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-between gap-10 items-center rounded-[10px] group bg-[#7289da] px-4 md:px-6 py-4 grow"
					>
						<div className="flex gap-4 items-center group-hover:translate-x-6 transition-transform">
							<SiDiscord className="text-white" />
							<span className="text-base md:text-lg font-semibold text-white">
								Discord Server
							</span>
						</div>
						<ArrowUpRight
							stroke="#fff"
							className="group-hover:-translate-x-6 transition-transform"
						/>
					</Link>
					<Link
						href="https://t.me/WeMakeDevs"
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-between gap-10 items-center rounded-[10px] group bg-[#0088cc] px-4 md:px-6 py-4 grow"
					>
						<div className="flex gap-4 items-center group-hover:translate-x-6 transition-transform">
							<SiTelegram className="text-white" />
							<span className="text-base md:text-lg font-semibold text-white">
								Telegram Channel
							</span>
						</div>
						<ArrowUpRight
							stroke="#fff"
							className="group-hover:-translate-x-6 transition-transform"
						/>
					</Link>
				</div>
			</ViewContainer>
		</section>
	);
};

export default Newsletter;
