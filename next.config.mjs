import createMDX from "@next/mdx";

/**
 * This app is the archive. It is served from archive.wemakedevs.org and exists
 * only to keep the URLs that wemakedevs.org still redirects here — the finished
 * hackathons, the initiatives, the partner decks, /careers and /scholarships.
 * See the redirects() block in the live site's next.config.ts: that file is the
 * authority on what has to keep resolving here, and nothing else does.
 *
 * Everything the live site rebuilt (the homepage, /hackathons, /meetups, /coc,
 * /prospects, /aws, /oracle) was deleted from this repo and is sent back there
 * by the redirects below. The full pre-prune site is on the `archive-full-site`
 * branch if any of it is ever needed again.
 */
const MAIN_SITE = "https://wemakedevs.org";

/** A removed page and everything beneath it, handed back to the live site. */
const movedSubtree = (path, destination = `${MAIN_SITE}${path}`) => [
	{ source: path, destination, permanent: true },
	{ source: `${path}/:path*`, destination, permanent: true },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	async redirects() {
		return [
			// The homepage is gone; anything still linking to the bare archive
			// domain belongs on the live site.
			{ source: "/", destination: MAIN_SITE, permanent: true },
			// Rebuilt on the live site, deleted here. `/hackathons` is an exact
			// match and does NOT get a `:path*` rule — a subtree rule would
			// shadow every archived hackathon underneath it.
			{
				source: "/hackathons",
				destination: `${MAIN_SITE}/hackathons`,
				permanent: true,
			},
			...movedSubtree("/coc"),
			...movedSubtree("/meetups"),
			...movedSubtree("/prospects"),
			...movedSubtree("/oracle"),
			// AWS Next Gen Hacks runs on the live site now. Both the short URL
			// this app used to rewrite and the underlying hackathon route land
			// on the same page there, subpages included — the live page is a
			// single scroller, so there is nothing deeper to preserve.
			...movedSubtree("/aws", `${MAIN_SITE}/aws`),
			...movedSubtree("/hackathons/aws", `${MAIN_SITE}/aws`),
		];
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
