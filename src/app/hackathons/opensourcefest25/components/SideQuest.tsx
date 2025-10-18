import { Gift, Share2, Star } from "lucide-react";

const SideQuest = () => {
	return (
		<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
			<div className="text-center mb-6">
				<div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
					<Gift className="w-5 h-5" />
					<span className="font-bold text-sm">Mini Side Quest</span>
				</div>
				<h3 className="text-2xl font-bold text-gray-800 mb-2">
					Win Exclusive WeMakeDevs Swag! 🎁
				</h3>
				<p className="text-gray-600 text-lg">
					At WeMakeDevs Open Source Fest, we're running a mini side
					quest with our friends at Kestra!
				</p>
			</div>

			<div className="space-y-6">
				<div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
					<h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
						Here's how to join:
					</h4>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center md:text-left">
							<div className="bg-yellow-500 p-2 rounded-lg">
								<Star className="w-6 h-6 text-white" />
							</div>
							<div className="flex-1">
								<p className="text-gray-800 font-medium">
									Star the Kestra repository
								</p>
								<a
									href="http://github.com/kestra-io/kestra"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 underline text-sm"
								>
									http://github.com/kestra-io/kestra
								</a>
							</div>
						</div>

						<div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center md:text-left">
							<div className="bg-blue-500 p-2 rounded-lg">
								<Share2 className="w-6 h-6 text-white" />
							</div>
							<div className="flex-1">
								<p className="text-gray-800 font-medium">
									Post about it on your socials, tagging
								</p>
								<div className="flex flex-wrap gap-2 mt-1 justify-center md:justify-start">
									<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
										@WeMakeDevs
									</span>
									<span className="text-gray-500">and</span>
									<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
										@kestra_io
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<p className="text-gray-700">
						We'll pick{" "}
						<span className="font-bold text-purple-600">
							10 random winners
						</span>{" "}
						from the community! 💫
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideQuest;
