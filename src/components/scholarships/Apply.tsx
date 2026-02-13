import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";

const Apply = () => {
	return (
		<section className="py-16 bg-white" id="apply">
			<ViewContainer>
				<div className="text-center space-y-8">
					{/* Main Apply Section */}
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold font-title">
							Apply for the Scholarship
						</h2>

						<div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
							<p className="text-primary font-medium mb-6 text-lg">
								Applications are reviewed on a rolling,
								first-come-first-serve basis, apply early to
								increase your chances!
							</p>

							<Link
								href="https://forms.gle/vYj6fZbzBQtxjkZc6"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "lg" }),
									"bg-primary hover:bg-blue-800 font-extrabold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
								)}
							>
								Apply Now
							</Link>
						</div>
					</div>

					{/* Social Media Sharing Section */}
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold font-title">
							Help WeMakeDevs spread the word!
						</h3>
						<p className="text-black/80 font-medium max-w-2xl mx-auto">
							Share about it on social media and tag{" "}
							<span className="font-semibold text-primary">
								@WeMakeDevs
							</span>{" "}
							and{" "}
							<span className="font-semibold text-primary">
								@GetStream
							</span>
						</p>

						<div className="flex justify-center gap-4 flex-col md:flex-row">
							<Link
								href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20scholarship%20opportunity%20from%20%40WeMakeDevs%20and%20%40GetStream!%20Apply%20now%20and%20take%20your%20career%20to%20the%20next%20level%20🚀"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants(),
									"bg-blue-500 hover:bg-blue-600",
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
								href="https://www.linkedin.com/sharing/share-offsite/?url=https://forms.gle/vYj6fZbzBQtxjkZc6"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants(),
									"bg-blue-700 hover:bg-blue-800",
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
				</div>
			</ViewContainer>
		</section>
	);
};

export default Apply;
