import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	// Keep the short /aws URL (and its subpages like /aws/rules) pointing at the
	// AWS Next Gen Hacks hackathon route
	async rewrites() {
		return [
			{
				source: "/aws",
				destination: "/hackathons/aws",
			},
			{
				source: "/aws/:path*",
				destination: "/hackathons/aws/:path*",
			},
			// Serve the Oracle partnership proposal (static HTML in /public) at /oracle
			{
				source: "/oracle",
				destination: "/oracle.html",
			},
		];
	},
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
