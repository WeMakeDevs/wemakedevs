import {
	ArrowRight,
	Facebook,
	Linkedin,
	MessageSquare,
	Share2,
	Twitter,
} from "lucide-react";
import Link from "next/link";

const Register = () => {
	const shareUrl = "https://www.wemakedevs.org/hackathons/opensourcefest25";
	const shareTitle = "WeMakeDevs Open Source Fest";
	const shareText =
		"Join me in the WeMakeDevs Open Source Fest! A month-long challenge to contribute to real-world open source projects and win amazing prizes!";

	const socialLinks = [
		{
			name: "Twitter",
			icon: Twitter,
			href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
			color: "from-blue-400 to-blue-600",
			hoverColor: "hover:from-blue-500 hover:to-blue-700",
		},
		{
			name: "LinkedIn",
			icon: Linkedin,
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
			color: "from-blue-600 to-blue-800",
			hoverColor: "hover:from-blue-700 hover:to-blue-900",
		},
		{
			name: "Facebook",
			icon: Facebook,
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
			color: "from-blue-500 to-indigo-600",
			hoverColor: "hover:from-blue-600 hover:to-indigo-700",
		},
	];

	return (
		<div className="bg-gradient-to-br from-blue-50/30 to-slate-50/30 py-12 md:py-20 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Main CTA Card */}
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
					<div className="p-6 sm:p-8 md:p-12">
						{/* Header */}
						<div className="text-center mb-6 md:mb-8">
							<div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-4 py-2 mb-4 md:mb-6">
								<Share2 className="w-4 h-4 text-indigo-600" />
								<span className="text-sm font-semibold text-indigo-700">
									Ready to Start?
								</span>
							</div>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
								Join the Open Source Fest
							</h2>
							<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
								Register now and start your open source journey.
								Connect with the community and spread the word!
							</p>
						</div>

						{/* Action Buttons */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
							{/* Register Button */}
							<Link
								href="https://forms.gle/z6mpzvh9mVjrazqa7"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
							>
								<div className="flex items-center justify-between gap-3">
									<div className="flex-1 min-w-0">
										<h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">
											Register Now
										</h3>
										<p className="text-white/90 text-xs md:text-sm">
											Secure your spot in the fest
										</p>
									</div>
									<div className="bg-white/20 rounded-full p-2 md:p-3 group-hover:bg-white/30 transition-colors flex-shrink-0">
										<ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
									</div>
								</div>
								{/* Shine effect */}
								<div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%]" />
							</Link>

							{/* Slack Community Button */}
							<Link
								href="https://kestra.io/slack"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
							>
								<div className="flex items-center justify-between gap-3">
									<div className="flex-1 min-w-0">
										<h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">
											Join Kestra Slack
										</h3>
										<p className="text-white/90 text-xs md:text-sm">
											Connect with the community
										</p>
									</div>
									<div className="bg-white/20 rounded-full p-2 md:p-3 group-hover:bg-white/30 transition-colors flex-shrink-0">
										<MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
									</div>
								</div>
								{/* Shine effect */}
								<div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%]" />
							</Link>
						</div>

						{/* Social Share Section */}
						<div className="border-t border-gray-200 pt-6 md:pt-8">
							<div className="text-center mb-4 md:mb-6">
								<h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
									Share with Your Network
								</h3>
								<p className="text-sm md:text-base text-gray-600">
									Help others discover this opportunity
								</p>
							</div>

							<div className="flex flex-wrap justify-center gap-3 md:gap-4">
								{socialLinks.map(social => {
									const IconComponent = social.icon;
									return (
										<Link
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className={`group flex items-center gap-2 md:gap-3 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-xl px-4 md:px-6 py-2 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
										>
											<IconComponent className="w-4 h-4 md:w-5 md:h-5" />
											<span className="font-semibold text-sm md:text-base">
												Share on {social.name}
											</span>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
