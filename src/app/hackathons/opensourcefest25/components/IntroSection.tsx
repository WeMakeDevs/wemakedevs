import { BookOpen, Heart, Users, Zap } from "lucide-react";

const IntroSection = () => {
	return (
		<div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
							<Heart className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
						Learn Open Source{" "}
						<span className="text-blue-600">The Right Way</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						It's not just about sending random pull requests; it's
						about learning, contributing, and being part of
						something bigger.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							Most people get Hacktoberfest wrong. It's not just
							about sending random pull requests; it's about
							learning, contributing, and being part of something
							bigger. We believe open source should reward
							contributors for their time and effort while helping
							them grow as developers. That's why we're launching
							the{" "}
							<span className="font-bold text-gray-800">
								WeMakeDevs Open Source Fest
							</span>
							, powered by Kestra, a month-long challenge where
							you'll contribute to real-world open source projects
							and learn how open source truly works.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							What makes this different is our focus on teaching
							you how to contribute the right way. You'll get
							practical tips, mentorship, and clear guidelines,
							even if you're starting from zero. Join the
							community, make real contributions, and unlock
							exciting rewards along the way. You'll also get a
							chance to win incredible prizes and explore job
							opportunities through your contributions.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
									<BookOpen className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Learn the Right Way
									</h3>
									<p className="text-gray-600">
										Not just random PRs
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Get practical tips, mentorship, and clear
								guidelines to make meaningful contributions that
								matter.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
									<Users className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Real Community
									</h3>
									<p className="text-gray-600">
										Connect with maintainers
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Join the Kestra community, work with real
								maintainers, and learn how open source projects
								actually work.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Amazing Rewards
									</h3>
									<p className="text-gray-600">
										Apple MacBook, Apple iPad & Interview at
										Kestra!
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Win incredible prizes and get paid internship
								opportunities at WeMakeDevs through your
								contributions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroSection;
