import { dianaImg, tarunImg } from "@/assets/images/scholarships";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const previousWinners = [
	{
		name: "Diana Pham",
		event: "KubeCon + CloudNativeCon North America 2022",
		linkedinUrl: "https://www.linkedin.com/in/dianasoyster/",
		image: dianaImg,
	},
	{
		name: "Tarun Chawla",
		event: "KubeCon + CloudNativeCon North America 2022",
		linkedinUrl: "https://www.linkedin.com/in/tarun-c/",
		image: tarunImg,
	},
];

const PreviousWinners = () => {
	return (
		<section className="py-20 bg-gray-50" id="previous-winners">
			<ViewContainer>
				<div className="text-center space-y-6 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold font-title">
						Previous Winners
					</h2>
					<p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
						Meet some of WeMakeDevs' amazing scholarship recipients who have
						attended major industry events and advanced their
						careers.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{previousWinners.map(winner => (
						<div
							key={winner.name}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
						>
							<div className="text-center space-y-4">
								{/* Profile Image */}
								<Image
									src={winner.image}
									alt={`${winner.name} profile photo`}
									className="w-20 h-20 rounded-full object-cover border-2 border-primary/10 mx-auto"
								/>

								{/* Winner Info */}
								<div>
									<Link
										href={winner.linkedinUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-200 block mb-2"
									>
										{winner.name}
									</Link>
									<p className="text-base font-medium leading-relaxed text-gray-600 text-balance">
										{winner.event}
									</p>
								</div>
							</div>
						</div>
					))}

					{/* Third Card - You could be next */}
					<div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary/20">
						<div className="text-center space-y-4">
							<div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
								<StarIcon className="size-10 text-primary" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									You could be next
								</h3>
								<p className="text-base font-medium leading-relaxed text-gray-600">
									Apply for WeMakeDevs scholarships and get a chance to
									attend KubeCon Amsterdam 2026!
								</p>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default PreviousWinners;
