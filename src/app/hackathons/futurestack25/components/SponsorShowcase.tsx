import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

const SponsorShowcase = () => {
	return (
		<div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 mt-8">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
					Tracks and Prizes
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Cerebras */}
					<Link
						href="https://cerebras.ai"
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 group-hover:scale-105 text-white relative overflow-hidden h-full">
							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
							<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

							<div className="flex flex-col items-center text-center relative z-10 h-full">
								<Image
									src={images.cerebrasLogo}
									alt="Cerebras Logo"
									className="w-24 h-10 my-8 object-contain filter brightness-0 invert"
								/>
								<p className="text-lg text-white/90 mb-3 leading-relaxed">
									World's fastest AI chip for lightning-fast
									inference and training
								</p>
								<p className="text-lg text-white leading-relaxed font-medium mb-6 flex-grow">
									Award goes to the best use of the Cerebras
									API.
								</p>
								<div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30 mt-auto">
									<div className="text-2xl font-bold mb-1">
										$5,000
									</div>
									<div className="text-sm text-white/80">
										+ Interview Opportunity
									</div>
								</div>
							</div>
						</div>
					</Link>

					{/* Meta */}
					<Link
						href="https://meta.ai"
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 group-hover:scale-105 text-white relative overflow-hidden h-full">
							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
							<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

							<div className="flex flex-col items-center text-center relative z-10 h-full">
								<Image
									src={images.metaLogo}
									alt="Meta Logo"
									className="w-24 h-10 my-8 object-contain filter brightness-0 invert"
								/>
								<p className="text-lg text-white/90 mb-6 leading-relaxed">
									Open-source large language models for
									cutting-edge AI applications
								</p>
								<p className="text-lg text-white leading-relaxed font-medium mb-6 flex-grow">
									Award goes to the best use of Llama, show us
									how you can build impactful generative AI
									applications.
								</p>
								<div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30 mt-auto">
									<div className="text-2xl font-bold mb-1">
										$5,000
									</div>
									<div className="text-sm text-white/80">
										+ Coffee Chat with Engineers
									</div>
								</div>
							</div>
						</div>
					</Link>

					{/* Docker */}
					<Link
						href="https://docker.com"
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<div
							className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 group-hover:scale-105 text-white relative overflow-hidden h-full"
							style={{
								background:
									"linear-gradient(135deg, #2061f2 0%, #1a4db8 100%)",
							}}
						>
							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
							<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

							<div className="flex flex-col items-center text-center relative z-10 h-full">
								<Image
									src={images.dockerLogo}
									alt="Docker Logo"
									className="w-24 h-10 my-8 object-contain filter brightness-0 invert"
								/>
								<p className="text-lg text-white/90 mb-6 leading-relaxed">
									Industry standard containerization for
									scalable deployments
								</p>
								<p className="text-lg text-white leading-relaxed font-medium mb-6 flex-grow">
									Award goes to the most creative use of the
									Docker MCP Gateway.
								</p>
								<div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30 mt-auto">
									<div className="text-2xl font-bold mb-1">
										$5,000
									</div>
									<div className="text-sm text-white/80">
										Cash Prize
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>

				{/* Runner-ups Card */}
				<div className="max-w-2xl mx-auto">
					<div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
						<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />

						<div className="text-center relative z-10">
							<div className="text-3xl font-bold mb-4">
								Social Media Raffle
							</div>
							<p className="text-xl text-white/90 mb-6 leading-relaxed text-balance">
								Post about your hackathon project on social
								media and tag our sponsors. 10 raffle winners
								will receive exclusive swag packs from our
								sponsors.
							</p>
							<div className="flex justify-center items-center gap-4 mb-6">
								<div className="bg-white/20 px-3 rounded-xl">
									<Image
										src={images.cerebrasLogo}
										alt="Cerebras"
										className="w-14 h-14 object-contain filter brightness-0 invert"
									/>
								</div>
								<div className="bg-white/20 px-3 rounded-xl">
									<Image
										src={images.metaLogo}
										alt="Meta"
										className="w-14 h-14 object-contain filter brightness-0 invert"
									/>
								</div>
								<div className="bg-white/20 px-3 rounded-xl">
									<Image
										src={images.dockerLogo}
										alt="Docker"
										className="w-14 h-14 object-contain filter brightness-0 invert"
									/>
								</div>
							</div>
							<div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 inline-block">
								<div className="text-lg font-semibold">
									Swag Packs
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorShowcase;
