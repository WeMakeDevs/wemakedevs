import { Globe, Languages, Sparkles } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="bg-gray-50 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
							<Languages className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
						Build Global from Day One
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							How do you translate your website for a global
							audience? Until now, it's been messy, juggling
							files, tools, and endless manual work.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							But with AI, that's changing. This hackathon is your
							chance to show how AI can help your app speak every
							language. Build global from day one and demonstrate
							the power of modern localization tools.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							Whether you're building a startup, scaling an
							open-source project, or just exploring new tools,
							this hackathon gives you the stage to create
							something amazing that speaks to audiences
							worldwide.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-blue-500 p-3 rounded-xl">
									<Globe className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Build Anything
									</h3>
									<p className="text-gray-600">
										No limits on your creativity
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Create any project you want—web apps, mobile
								apps, APIs, or tools. The more Lingo products
								you use, the more points you get.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-purple-500 p-3 rounded-xl">
									<Languages className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Translate Everything
									</h3>
									<p className="text-gray-600">
										Powered by Lingo
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Use Lingo CLI to seamlessly add multiple
								languages to your project. Show how AI-powered
								localization makes going multilingual simple and
								developer-friendly.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-orange-500 p-3 rounded-xl">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Win Prizes
									</h3>
									<p className="text-gray-600">
										₹100,000+ in rewards
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Compete for cash prizes, Lingo credits, and
								exclusive swag. Top 3 winners take home ₹100,000
								plus rewards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
