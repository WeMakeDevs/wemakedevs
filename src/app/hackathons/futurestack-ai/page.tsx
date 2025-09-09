"use client";

import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { cerebrasLogo, dockerLogo, metaLogo } from "./images";

const FutureStackAIPage = () => {
	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			{/* Hero Section */}
			<section className="pt-32 pb-16">
				<ViewContainer>
					<div className="text-center space-y-8">
						<div className="space-y-6">
							<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								FutureStack AI Hackathon
							</h1>
							<p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
								The ultimate AI hackathon is coming soon. Get
								ready to build the future with cutting-edge AI
								technology.
							</p>
						</div>

						{/* Sponsors Section */}
						<div className="pt-12">
							<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
								Proudly Sponsored By
							</h2>
							<div className="flex justify-center items-center divide-x divide-gray-300">
								<div className="flex items-center justify-center px-8 md:px-12">
									<Image
										src={cerebrasLogo}
										alt="Cerebras Systems"
										width={120}
										height={50}
										className="object-contain h-12"
									/>
								</div>
								<div className="flex items-center justify-center px-8 md:px-12">
									<Image
										src={metaLogo}
										alt="Meta"
										width={120}
										height={50}
										className="object-contain h-12"
									/>
								</div>
								<div className="flex items-center justify-center px-8 md:px-12">
									<Image
										src={dockerLogo}
										alt="Docker"
										width={120}
										height={50}
										className="object-contain h-12"
									/>
								</div>
							</div>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Prizes Section */}
			<section id="prizes" className="py-16 bg-white">
				<ViewContainer>
					<div className="text-center space-y-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Amazing Prizes Await
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
								<div className="text-4xl mb-4">💰</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Huge Cash Prizes
								</h3>
								<p className="text-gray-700">
									Substantial cash rewards awaiting the most
									innovative and impactful winning teams
								</p>
							</div>

							<div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl border border-blue-200">
								<div className="text-4xl mb-4">💼</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Interview at Cerebras
								</h3>
								<p className="text-gray-700">
									Fast-track interview opportunity with
									Cerebras Systems engineering and AI teams
								</p>
							</div>

							<div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200">
								<div className="text-4xl mb-4">☕</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Coffee Chat with Meta Engineers
								</h3>
								<p className="text-gray-700">
									Exclusive networking session with Meta's top
									engineering and product development experts
								</p>
							</div>
						</div>

						<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
							<p className="text-lg font-semibold text-indigo-800">
								🎉 More exciting prizes to be announced soon!
							</p>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Get Head Start Section */}
			<section id="start" className="py-16 bg-gray-50">
				<ViewContainer>
					<div className="text-center space-y-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Get a Head Start
						</h2>
						<div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
							<p className="text-lg text-gray-700 mb-6">
								Sign up to Cerebras and get{" "}
								<span className="font-bold text-blue-600">
									1.2 million free tokens daily
								</span>{" "}
								no credit card required!
							</p>
							<Link
								href="https://cloud.cerebras.ai/?referral_code=wemakedevs"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "lg" }),
									"bg-primary hover:bg-blue-800 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
								)}
							>
								Start Building with Cerebras
							</Link>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Early Registration Section */}
			<section id="register" className="py-16 bg-white">
				<ViewContainer>
					<div className="text-center space-y-8">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Early Registration
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Be the first to know when registration opens and
							secure your spot in this exciting AI hackathon.
						</p>

						<div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
							<iframe
								title="Early Registration Form"
								width="540"
								height="305"
								src="https://718dd6be.sibforms.com/serve/MUIFAPOiGf5adOe6Vrxp0VeEdvc70ZbjN-nqlnaZXVAeZ_ZcQXKTvd4S8Ru2lhuIUd9ElFEUgkswyJa1c_kNVf_VztG6w0L5xzTRBfnGiilVApupHhZmbKgtSoaa1rOpGA58nD5mOc1OeYQNncQD3_BOq72NNR6SuISZDNlxFBHUhhvRVHRYCUHyl_GV82058IGlHIo3w7kPRikg"
								frameBorder="0"
								scrolling="auto"
								allowFullScreen
								className="w-full h-[480px] min-[400px]:h-[460px] min-[570px]:h-[420px] max-w-full"
								style={{
									display: "block",
									marginLeft: "auto",
									marginRight: "auto",
									maxWidth: "100%",
								}}
							/>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Share on Socials Section */}
			<section id="share" className="py-16 bg-gray-50">
				<ViewContainer>
					<div className="text-center space-y-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Help Us Spread the Word!
						</h2>
						<p className="text-lg text-gray-700 max-w-2xl mx-auto">
							Share about FutureStack AI on social media and tag{" "}
							<span className="font-semibold text-blue-600">
								@WeMakeDevs
							</span>
							,{" "}
							<span className="font-semibold text-blue-600">
								@CerebrasSystems
							</span>
							,{" "}
							<span className="font-semibold text-blue-600">
								@Meta
							</span>
							, and{" "}
							<span className="font-semibold text-blue-600">
								@Docker
							</span>
						</p>

						<div className="flex justify-center gap-4 flex-col md:flex-row">
							<Link
								href="https://twitter.com/intent/tweet?text=Excited%20for%20FutureStack%20AI%20hackathon%20coming%20soon!%20Amazing%20prizes%20and%20opportunities%20await.%20Thanks%20to%20%40WeMakeDevs%20%40CerebrasSystems%20%40Meta%20%40Docker%20for%20making%20this%20possible!%20%23FutureStackAI%20%23AIHackathon%20🚀🤖"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants(),
									"bg-blue-500 hover:bg-blue-600 text-white",
								)}
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
								</svg>
								Share on Twitter
							</Link>

							<Link
								href="https://www.linkedin.com/sharing/share-offsite/?url=https://wemakedevs.org/hackathons/futurestack-ai"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants(),
									"bg-blue-700 hover:bg-blue-800 text-white",
								)}
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								Share on LinkedIn
							</Link>
						</div>
					</div>
				</ViewContainer>
			</section>
		</main>
	);
};

export default FutureStackAIPage;
