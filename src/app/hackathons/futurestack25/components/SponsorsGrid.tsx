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
					<h3 className="text-2xl font-bold mb-2">
						<Link
							href="https://cerebras.ai"
							className="text-orange-600 underline hover:no-underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Cerebras
						</Link>
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Cerebras has built the world's largest and fastest AI chip,
					designed to power breakthrough performance in training and
					inference at scale. Their platform makes working with
					massive models accessible and lightning fast, helping
					developers and researchers move from idea to results in
					record time.
				</p>
			</div>

			{/* Meta */}
			<div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
				<div className="text-center mb-6">
					<Image
						src={images.metaLogo}
						alt="Meta Logo"
						className="w-20 h-20 object-contain mx-auto mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2">
						<Link
							href="https://meta.ai"
							className="text-blue-600 underline hover:no-underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Meta
						</Link>
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Meta is behind the Llama family of open-source large
					language models, bringing cutting-edge AI to developers and
					researchers everywhere. Llama is designed to be flexible,
					efficient, and community-driven, enabling innovation across
					a wide range of applications and projects.
				</p>
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
					<h3 className="text-2xl font-bold mb-2">
						<Link
							href="https://docker.com"
							className="underline hover:no-underline"
							style={{ color: "#2061f2" }}
							target="_blank"
							rel="noopener noreferrer"
						>
							Docker
						</Link>
					</h3>
				</div>
				<p className="text-gray-700 leading-relaxed">
					Docker is the industry standard for containerization, making
					it simple to build, share, and run applications anywhere. By
					streamlining development workflows and improving
					scalability, Docker empowers developers to bring their ideas
					to life faster and more reliably.
				</p>
			</div>
		</div>
	);
};

export default SponsorsGrid;
