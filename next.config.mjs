import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	// Keep the short /aws URL (and its subpages like /aws/rules) pointing at the
	// AWS Next Gen Hacks hackathon route
	async rewrites() {
		return {
			// beforeFiles runs before filesystem routes are checked, so these win
			// even when a local page (like the home page) matches the same path.
			beforeFiles: [
				{
					source: "/",
					destination: "https://wmd-frontend.vercel.app/",
				},
				{
					source: "/founder",
					destination: "https://wmd-frontend.vercel.app/founder",
				},
				{
					source: "/llms.txt",
					destination: "https://wmd-frontend.vercel.app/llms.txt",
				},
				{
					source: "/aws",
					destination: "https://wmd-frontend.vercel.app/aws",
				},
				{
					source: "/blogs",
					destination: "https://wmd-frontend.vercel.app/blogs",
				},
				// Catches every blog subpath: individual posts (/blogs/:slug),
				// the feed (/blogs/rss.xml) and the per-post metadata images
				// Next generates (/blogs/:slug/opengraph-image,
				// /blogs/:slug/twitter-image). Query strings — the cache-busting
				// hash Next appends to those image URLs — are forwarded as-is.
				{
					source: "/blogs/:path*",
					destination: "https://wmd-frontend.vercel.app/blogs/:path*",
				},
			],
			afterFiles: [
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
			],
		};
	},
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
