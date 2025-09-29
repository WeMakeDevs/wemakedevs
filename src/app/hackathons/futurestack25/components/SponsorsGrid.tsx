import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

const SponsorsGrid = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{/* Cerebras */}
			<div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
				<div className="text-center mb-6">
					<Image
						src={images.cerebrasLogo}
						alt="Cerebras Logo"
						className="w-20 h-20 object-contain mx-auto mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2 text-orange-600">
						Cerebras
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Cerebras has built the world's largest and fastest AI chip,
					designed to power breakthrough performance in training and
					inference. Their platform makes working with massive models
					accessible and lightning fast, helping developers and
					researchers move from idea to results in record time.
				</p>
				<div className="mt-6 text-center">
					<Link
						href="https://cloud.cerebras.ai/?referral_code=wemakedevs"
						className="inline-block px-4 py-2 rounded-[4px] bg-orange-600 text-white hover:bg-orange-700"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sign Up!
					</Link>
				</div>
			</div>

			{/* Meta */}
			<div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
				<div className="text-center mb-6">
					<Image
						src={images.metaLogo}
						alt="Meta Logo"
						className="w-20 h-20 object-contain mx-auto mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2 text-blue-600">
						Meta
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Meta is behind the Llama family of open-source large
					language models, bringing cutting-edge AI to developers and
					researchers everywhere. Llama is designed to be flexible,
					efficient, and community-driven, enabling innovation across
					a wide range of applications and projects.
				</p>
				<div className="mt-6 text-center">
					<Link
						href="https://www.llama.com/"
						className="inline-block px-4 py-2 rounded-[4px] bg-blue-600 text-white hover:bg-blue-700"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn more
					</Link>
				</div>
			</div>

			{/* Docker */}
			<div
				className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
				style={{ borderColor: "rgba(32, 97, 242, 0.3)" }}
			>
				<div className="text-center mb-6">
					<Image
						src={images.dockerLogo}
						alt="Docker Logo"
						className="w-20 h-20 object-contain mx-auto mb-4"
					/>
					<h3
						className="text-2xl font-bold mb-2"
						style={{ color: "#2061f2" }}
					>
						Docker
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Docker is the industry standard for containerization, making
					it simple to build, share, and run applications anywhere. By
					streamlining development workflows and improving
					scalability, Docker empowers developers to bring their ideas
					to life faster and more reliably.
				</p>
				<div className="mt-6 text-center">
					<Link
						href="https://www.docker.com/products/mcp-catalog-and-toolkit/"
						className="inline-block px-4 py-2 rounded-[4px] text-white hover:no-underline"
						style={{ backgroundColor: "#2061f2" }}
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn more
					</Link>
				</div>
			</div>

			{/* OpenRouter */}
			<div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 md:col-start-2">
				<div className="text-center mb-6">
					<Image
						src={images.openrouterLogo}
						alt="OpenRouter Logo"
						className="w-40 h-20 object-contain mx-auto mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2 text-gray-700">
						OpenRouter
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					OpenRouter is providing a coupon for up to 500 hackers to
					receive additional free tokens during the hackathon. Use the
					code{" "}
					<span className="font-semibold">
						OPENROUTER-CEREBRAS-HACKATHON
					</span>{" "}
					to claim $5 in OpenRouter credits. To redeem, sign up for an
					OpenRouter account and visit{" "}
					<Link
						href="https://openrouter.ai/redeem"
						className="whitespace-nowrap font-semibold hover:underline text-blue-700"
						target="_blank"
						rel="noopener noreferrer"
					>
						openrouter.ai/redeem
					</Link>{" "}
					to apply the code. Valid through October 4.
				</p>
				<div className="mt-6 text-center">
					<Link
						href="http://openrouter.ai/"
						className="inline-block px-4 py-2 rounded-[4px] bg-gray-700 text-white hover:bg-gray-800"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sign up!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SponsorsGrid;
