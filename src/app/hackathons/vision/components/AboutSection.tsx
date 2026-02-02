import { Camera, Eye, Radio, Zap } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
						Your Mission Objectives
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Build multi-modal AI agents that watch, listen, and understand video in real-time
					</p>
				</div>

				{/* Main content - Two columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left column - Text content */}
					<div className="space-y-8">
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							In the world of AI, video remains the final frontier. 
							Static image analysis is yesterday's mission. Real-time 
							video understanding is the protocol for the future.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Vision Agents gives you the building blocks to create 
							intelligent, low-latency video experiences powered by 
							your models, your infrastructure, and your use cases.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Whether you're building security systems, sports coaching 
							AI, drone detection, or interactive gaming experiences - 
							this hackathon is your chance to push the boundaries of 
							what's possible with real-time Vision AI.
						</p>

						{/* Key stats */}
						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
								<div className="text-3xl font-bold text-cyan-400">500ms</div>
								<div className="text-slate-400 text-sm">Join latency</div>
							</div>
							<div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
								<div className="text-3xl font-bold text-cyan-400">&lt;30ms</div>
								<div className="text-slate-400 text-sm">Audio/Video latency</div>
							</div>
						</div>
					</div>

					{/* Right column - Feature cards */}
					<div className="space-y-8">
						{/* Video AI */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-4 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
									<Camera className="w-7 h-7 text-slate-900" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-cyan-400 mb-2">
										Video AI
									</h3>
									<p className="text-slate-400 mb-3">
										Real-time video intelligence
									</p>
									<p className="text-slate-300 leading-relaxed">
										Combine YOLO, Roboflow, Moondream, and other 
										vision models with Gemini/OpenAI in real-time. 
										Build agents that truly see and understand.
									</p>
								</div>
							</div>
						</div>

						{/* Low Latency */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow">
									<Zap className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-cyan-400 mb-2">
										Ultra-Low Latency
									</h3>
									<p className="text-slate-400 mb-3">
										Stream's edge network
									</p>
									<p className="text-slate-300 leading-relaxed">
										Join quickly (500ms) and maintain audio/video 
										latency under 30ms. Your agents respond in 
										real-time, not real-later.
									</p>
								</div>
							</div>
						</div>

						{/* Native APIs */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-purple-500 to-violet-600 p-4 rounded-2xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
									<Radio className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-cyan-400 mb-2">
										Native LLM APIs
									</h3>
									<p className="text-slate-400 mb-3">
										Direct access to the latest models
									</p>
									<p className="text-slate-300 leading-relaxed">
										Native SDK methods from OpenAI, Gemini, and 
										Claude. Always access the latest LLM 
										capabilities without waiting for wrapper updates.
									</p>
								</div>
							</div>
						</div>

						{/* Multi-platform */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
									<Eye className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-cyan-400 mb-2">
										Cross-Platform SDKs
									</h3>
									<p className="text-slate-400 mb-3">
										Build anywhere
									</p>
									<p className="text-slate-300 leading-relaxed">
										SDKs for React, Android, iOS, Flutter, React 
										Native, and Unity. Your vision agents can run 
										on any platform.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
