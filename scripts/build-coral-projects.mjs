// One-shot script to convert Coral hackathon projects.csv into a TypeScript
// data module that mirrors the openmetadata projects.ts shape.
//
// Usage: node scripts/build-coral-projects.mjs
//
// Reads:  src/app/hackathons/coral/projects.csv
// Writes: src/app/hackathons/coral/projects.ts
//
// Re-run this script if the CSV is updated with new submissions.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const csvPath = join(
	repoRoot,
	"src/app/hackathons/coral/projects.csv",
);
const outPath = join(
	repoRoot,
	"src/app/hackathons/coral/projects.ts",
);

const raw = readFileSync(csvPath, "utf8");

// Robust CSV parser supporting quoted fields with embedded newlines + escaped
// double quotes ("").
function parseCsv(input) {
	const rows = [];
	let field = "";
	let row = [];
	let inQuotes = false;
	for (let i = 0; i < input.length; i++) {
		const c = input[i];
		if (inQuotes) {
			if (c === '"') {
				if (input[i + 1] === '"') {
					field += '"';
					i++;
				} else {
					inQuotes = false;
				}
			} else {
				field += c;
			}
		} else {
			if (c === '"') {
				inQuotes = true;
			} else if (c === ",") {
				row.push(field);
				field = "";
			} else if (c === "\n") {
				row.push(field);
				rows.push(row);
				row = [];
				field = "";
			} else if (c === "\r") {
				// ignore, handled by \n
			} else {
				field += c;
			}
		}
	}
	if (field.length > 0 || row.length > 0) {
		row.push(field);
		rows.push(row);
	}
	return rows;
}

const rows = parseCsv(raw);
const header = rows[0];
const dataRows = rows.slice(1).filter(r => r.some(cell => cell.trim() !== ""));

const colIdx = name => header.indexOf(name);
const idxTeam = colIdx("Team name");
const idxSubmitter = colIdx("Name of the person submitting the form");
const idxTrack = colIdx("Track you are submitting for");
const idxDescription = colIdx("Project description");
const idxGithub = colIdx("GitHub link to project");
const idxDeployed = colIdx("Deployed link to project");
const idxYoutube = colIdx("YouTube video demo link");
const idxSourceSpec = colIdx("Chart New Waters: Build a Source Spec");
const idxBlogGuide = colIdx(
	'Captain\'s Log: End-to-End "How to Build X" Guides',
);

if (
	[
		idxTeam,
		idxSubmitter,
		idxTrack,
		idxDescription,
		idxGithub,
		idxDeployed,
		idxYoutube,
		idxSourceSpec,
		idxBlogGuide,
	].some(i => i === -1)
) {
	throw new Error(
		`Missing expected columns. Header was: ${JSON.stringify(header)}`,
	);
}

const cleanString = s => (s ?? "").trim();

const cleanLink = s => {
	const v = cleanString(s);
	if (!v) return "";
	if (v.toLowerCase() === "n/a" || v.toLowerCase() === "na") return "";
	if (v === "-") return "";
	const firstUrl = v.match(/https?:\/\/\S+/);
	return firstUrl ? firstUrl[0].replace(/[)\]>,.;]+$/, "") : v;
};

// Extract every http(s) URL from a free-form text field, normalizing trailing
// punctuation (typical when users paste URLs followed by a comma or period).
const extractUrls = s => {
	const v = cleanString(s);
	if (!v) return [];
	if (v.toLowerCase() === "n/a" || v.toLowerCase() === "na") return [];
	if (v === "-") return [];
	const matches = v.match(/https?:\/\/[^\s,'"<>()\]]+/gi) || [];
	const cleaned = matches.map(u => u.replace(/[)\]>,.;:!?'"]+$/g, ""));
	// Dedupe while preserving order
	const seen = new Set();
	const out = [];
	for (const u of cleaned) {
		if (seen.has(u)) continue;
		seen.add(u);
		out.push(u);
	}
	return out;
};

// Filter to URLs that look like blog posts / write-ups (Medium, Hashnode,
// dev.to, Substack, personal subdomains, etc.). Excludes social media and
// raw GitHub links — those are tracked separately.
const looksLikeBlog = url => {
	const lc = url.toLowerCase();
	// Reject obvious non-blog links
	if (/youtube\.com|youtu\.be/.test(lc)) return false;
	if (/discord\.com|discord\.gg/.test(lc)) return false;
	if (/twitter\.com|x\.com\//.test(lc)) return false;
	if (/linkedin\.com/.test(lc)) return false;
	if (/instagram\.com|facebook\.com|threads\.net|reddit\.com/.test(lc)) {
		return false;
	}
	if (/github\.com/.test(lc)) return false;
	if (/gitlab\.com/.test(lc)) return false;
	if (/loom\.com|drive\.google\.com|docs\.google\.com/.test(lc)) return false;
	if (/forms\.gle|notion\.so/.test(lc)) return false;
	// Accept known blog platforms and any *.dev / *.io / *.com page that
	// contains "/blog" or has a recognizable post path.
	if (
		/medium\.com|hashnode\.dev|hashnode\.com|dev\.to|substack\.com|wordpress\.com|ghost\.io|bearblog\.dev/.test(
			lc,
		)
	) {
		return true;
	}
	if (/\/blog\b|\/post\/|\/posts\/|\/article\/|\/articles\//.test(lc)) {
		return true;
	}
	// Personal hashnode-style subdomains: *.hashnode.dev
	if (/\.hashnode\.dev/.test(lc)) return true;
	// Personal medium-style subdomains: *.medium.com
	if (/\.medium\.com/.test(lc)) return true;
	return false;
};

// Filter to URLs that look like a PR or issue contribution to the Coral repo
// (or any other open-source project). Detects common GitHub/GitLab patterns.
const looksLikePr = url => {
	const lc = url.toLowerCase();
	if (!/github\.com|gitlab\.com/.test(lc)) return false;
	// Direct PR link: github.com/owner/repo/pull/N
	if (/github\.com\/[^/]+\/[^/]+\/pull\//.test(lc)) return true;
	// Issue: github.com/owner/repo/issues/N
	if (/github\.com\/[^/]+\/[^/]+\/issues\//.test(lc)) return true;
	// Filtered PR list: github.com/owner/repo/pulls?...
	if (/github\.com\/[^/]+\/[^/]+\/pulls\b/.test(lc)) return true;
	// Branch / tree links into the coral repo specifically (these are common
	// when participants share their fork with a feature branch).
	if (
		/github\.com\/[^/]+\/coral\/tree\/|github\.com\/withcoral\//.test(lc)
	) {
		return true;
	}
	// Merge requests on GitLab
	if (/gitlab\.com\/[^/]+\/[^/]+\/-\/merge_requests\//.test(lc)) return true;
	return false;
};

// Try to derive a "real" project name from the GitHub URL: the last
// non-empty segment, with dashes/underscores converted to spaces and each
// word title-cased. Returns "" if it doesn't look like a project name (too
// long, generic, or just a fragment like "pulls").
const titleFromGithub = githubUrl => {
	if (!githubUrl) return "";
	try {
		const u = new URL(githubUrl);
		if (!u.hostname.endsWith("github.com") && !u.hostname.endsWith("gitlab.com")) {
			return "";
		}
		const parts = u.pathname.split("/").filter(Boolean);
		// owner/repo[/...]; we want repo (parts[1]) when it's a normal repo URL.
		if (parts.length < 2) return "";
		let repo = parts[1];
		// Strip query-like artifacts and .git
		repo = repo.replace(/\.git$/i, "");
		// Skip obvious "lookups" (e.g. `pulls?q=...` got into parts[1] when path
		// was /withcoral/coral/pulls — but parts[1] would be "coral" which is
		// fine; real query strings are stripped by URL).
		// Reject very short/generic repo names
		if (repo.length < 3) return "";
		// Reject if repo is the username/owner-style "user.github.io"
		if (/\.github\.io$/i.test(repo)) return "";
		// Pretty case: split on - or _ and Title-case words
		const pretty = repo
			.split(/[-_]+/)
			.filter(Boolean)
			.map(w => {
				// Keep all-caps words (like "AI", "API") as-is
				if (/^[A-Z0-9]{2,}$/.test(w)) return w;
				// Avoid butchering all-lowercase camel: just upcase first char
				return w.charAt(0).toUpperCase() + w.slice(1);
			})
			.join(" ")
			.trim();
		if (pretty.length === 0 || pretty.length > 60) return "";
		// Skip overly generic names
		const generic = new Set([
			"hackathon",
			"coral",
			"coral hackathon",
			"project",
			"projects",
			"submission",
			"main",
			"test",
			"demo",
			"app",
		]);
		if (generic.has(pretty.toLowerCase())) return "";
		return pretty;
	} catch {
		return "";
	}
};

// Pull a candidate name from the start of a description. Looks for patterns
// like "Foo is ...", "Foo - ...", "Foo: ..." and returns the leading phrase
// when it looks like a proper project name (short, mostly letters).
const titleFromDescription = description => {
	const text = cleanString(description);
	if (!text) return "";
	// Strip leading bracketed labels like "[ FOO BAR ]"
	const bracketMatch = text.match(/^\s*\[\s*([^\]]+?)\s*\]\s*/);
	if (bracketMatch && bracketMatch[1].length <= 60) {
		return bracketMatch[1].trim();
	}
	const lines = text
		.split(/\n+/)
		.map(l => l.trim())
		.filter(Boolean);
	if (lines.length === 0) return "";
	const first = lines[0];

	const reject = new Set([
		"this",
		"that",
		"the",
		"a",
		"an",
		"we",
		"i",
		"my",
		"our",
		"it",
		"there",
		"here",
		"built",
		"build",
		"created",
		"create",
		"developed",
		"made",
		"submitting",
		"submission",
		"i am",
		"yes",
		"no",
		"hi",
		"hello",
		"in",
		"on",
		"with",
		"for",
		"as",
		"so",
		"and",
		"but",
		"or",
		"if",
		"when",
		"while",
	]);
	const isRejectedName = candidate => {
		const lc = candidate.toLowerCase();
		return (
			reject.has(lc) ||
			lc.startsWith("i am ") ||
			lc.startsWith("we are ") ||
			lc.startsWith("we have ") ||
			lc.startsWith("i have ") ||
			lc.startsWith("the ") ||
			lc.startsWith("a ") ||
			lc.startsWith("an ") ||
			lc.startsWith("this ") ||
			lc.startsWith("our ") ||
			lc.startsWith("my ")
		);
	};
	const isValidName = candidate =>
		!isRejectedName(candidate) &&
		candidate.length >= 3 &&
		candidate.length <= 50 &&
		/[A-Za-z]/.test(candidate) &&
		!/[?!]/.test(candidate);

	// Pattern A: "Name is/are/was ..." — name can include dots (Scriptless.ai)
	const verbMatch = first.match(
		/^([A-Za-z][\w&'.\- ]{1,40}?)\s+(?:is|are|was|were|helps|allows|enables|provides|brings|turns|combines|connects|aims|powers|delivers|gives|lets|takes|tracks|monitors|detects|finds|joins|queries|analyzes|generates|builds|creates|diagnoses|automates|transforms|simplifies|streamlines|empowers|reduces|saves|protects|helps|uses|leverages|unifies|orchestrates|integrates|maps|surfaces|highlights|forecasts|predicts|recommends|identifies|prevents|eliminates|optimizes)\b/i,
	);
	if (verbMatch && isValidName(verbMatch[1].trim())) {
		return verbMatch[1].trim();
	}
	// Pattern B: "Name — ..." / "Name - ..." / "Name: ..." (with or without
	// space before the colon, and Unicode arrow)
	const dashMatch = first.match(
		/^([A-Za-z][\w&'.\- ]{1,40}?)\s*(?:—|–|->|→|:)\s+\S/,
	);
	if (dashMatch && isValidName(dashMatch[1].trim())) {
		return dashMatch[1].trim();
	}
	// Pattern C: Leading PascalCase / CamelCase / single-word capitalized name
	// followed by any word — capture only the proper noun.
	// Examples that should match: "PulseIQ diagnoses production..." -> "PulseIQ"
	const pascalMatch = first.match(/^([A-Z][a-zA-Z0-9.]{2,29}(?:[A-Z][a-zA-Z0-9.]*)*)\s+/);
	if (pascalMatch && isValidName(pascalMatch[1].trim())) {
		// Require at least one uppercase letter beyond the first character to
		// avoid grabbing common Sentence-Case sentence starters like "Modern"
		// or "Built". Also accept dotted names like "Scriptless.ai".
		const cand = pascalMatch[1].trim();
		const interiorUpper = /[A-Z]/.test(cand.slice(1));
		const hasDot = /\./.test(cand);
		if (interiorUpper || hasDot) {
			return cand;
		}
	}
	return "";
};

// Build a short, single-line title for the project. Priority order:
//   1. Bracketed name in description, e.g. "[ FOO BAR ]"
//   2. Leading proper noun in description ("Foo is ...", "Foo: ...")
//   3. Pretty-cased GitHub repo name (last path segment)
//   4. Team name as last resort (better than a truncated descriptive sentence)
const buildTitle = (description, fallback, githubUrl) => {
	const fromDesc = titleFromDescription(description);
	if (fromDesc) return fromDesc;
	const fromGh = titleFromGithub(githubUrl);
	if (fromGh) return fromGh;
	return cleanString(fallback) || "Coral Hackathon Project";
};

const projects = [];
for (const row of dataRows) {
	const team = cleanString(row[idxTeam]);
	const submitter = cleanString(row[idxSubmitter]);
	if (!team && !submitter) continue;
	const description = cleanString(row[idxDescription]);
	const github = cleanLink(row[idxGithub]);
	const deployed = cleanLink(row[idxDeployed]);
	const youtube = cleanLink(row[idxYoutube]);
	const trackRaw = cleanString(row[idxTrack]);

	// Multi-URL extraction from the bounty columns
	const sourceSpecUrls = extractUrls(row[idxSourceSpec]);
	const blogGuideUrls = extractUrls(row[idxBlogGuide]);

	// Blogs come from the "How to Build X Guides" column primarily, but we
	// also pick up blog links that landed in the source-spec column.
	const blogs = [...blogGuideUrls, ...sourceSpecUrls].filter(looksLikeBlog);
	// PRs primarily come from the source-spec column, but blog-guide cells
	// sometimes contain PR links too. Also include blog-guide URLs that
	// happen to point at a PR.
	const prs = [...sourceSpecUrls, ...blogGuideUrls].filter(looksLikePr);

	// Skip rows that have nothing useful to show
	if (
		!github &&
		!deployed &&
		!youtube &&
		!description &&
		blogs.length === 0 &&
		prs.length === 0
	) {
		continue;
	}

	// Determine "isSolo": treat as solo when submitter & team match, or team
	// is the personal name of the submitter (or team is "Solo").
	const isSolo =
		!team ||
		team.toLowerCase() === "solo" ||
		team.toLowerCase() === submitter.toLowerCase();

	// Compact tracks: collapse "Track 1: Build an Enterprise Agent" -> "Track 1"
	const tracks = trackRaw
		.split(/,(?![^()]*\))/)
		.map(t => t.trim())
		.filter(Boolean)
		.map(t => {
			if (/Track 1/i.test(t)) return "Track 1";
			if (/Track 2/i.test(t)) return "Track 2";
			if (/Special Bounties/i.test(t)) return "Bounties";
			return t;
		});

	// Dedupe blogs and prs (some submissions repeat the same URL across
	// multiple bounty cells).
	const dedupeUrls = list => {
		const seen = new Set();
		const out = [];
		for (const u of list) {
			if (seen.has(u)) continue;
			seen.add(u);
			out.push(u);
		}
		return out;
	};

	projects.push({
		team: team || submitter,
		submitter,
		isSolo,
		title: buildTitle(description, team || submitter, github),
		tracks,
		github,
		deployed,
		youtube,
		blogs: dedupeUrls(blogs),
		prs: dedupeUrls(prs),
	});
}

// Sort alphabetically by team to match the openmetadata pattern.
projects.sort((a, b) =>
	a.team.localeCompare(b.team, "en", { sensitivity: "base" }),
);

// Deduplicate by (team + github + youtube) just in case the form was submitted
// twice for the same project.
const seen = new Set();
const dedup = [];
for (const p of projects) {
	const key = `${p.team}|${p.github}|${p.youtube}`;
	if (seen.has(key)) continue;
	seen.add(key);
	dedup.push(p);
}

const tsString = s =>
	JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

const lines = [];
lines.push(
	'// Project submissions for the "Pirates of the Coral-bean" hackathon.',
);
lines.push("// Sourced from the hackathon submission form (projects.csv).");
lines.push("");
lines.push("type SubmittedProject = {");
lines.push("\tteam: string;");
lines.push("\tsubmitter: string;");
lines.push("\tisSolo: boolean;");
lines.push("\ttitle: string;");
lines.push("\ttracks: string[];");
lines.push("\tgithub: string;");
lines.push("\tdeployed: string;");
lines.push("\tyoutube: string;");
lines.push("\tblogs: string[];");
lines.push("\tprs: string[];");
lines.push("};");
lines.push("");
lines.push("const submittedProjects: SubmittedProject[] = [");
for (const p of dedup) {
	lines.push("\t{");
	lines.push(`\t\tteam: ${tsString(p.team)},`);
	lines.push(`\t\tsubmitter: ${tsString(p.submitter)},`);
	lines.push(`\t\tisSolo: ${p.isSolo ? "true" : "false"},`);
	lines.push(`\t\ttitle: ${tsString(p.title)},`);
	lines.push(`\t\ttracks: [${p.tracks.map(t => tsString(t)).join(", ")}],`);
	lines.push(`\t\tgithub: ${tsString(p.github)},`);
	lines.push(`\t\tdeployed: ${tsString(p.deployed)},`);
	lines.push(`\t\tyoutube: ${tsString(p.youtube)},`);
	lines.push(
		`\t\tblogs: [${p.blogs.map(u => tsString(u)).join(", ")}],`,
	);
	lines.push(`\t\tprs: [${p.prs.map(u => tsString(u)).join(", ")}],`);
	lines.push("\t},");
}
lines.push("];");
lines.push("");
lines.push("export { submittedProjects };");
lines.push("export type { SubmittedProject };");
lines.push("");

writeFileSync(outPath, lines.join("\n"), "utf8");

const totalBlogs = dedup.reduce((s, p) => s + p.blogs.length, 0);
const totalPrs = dedup.reduce((s, p) => s + p.prs.length, 0);
const projectsWithBlogs = dedup.filter(p => p.blogs.length).length;
const projectsWithPrs = dedup.filter(p => p.prs.length).length;
console.log(
	`Wrote ${dedup.length} projects (from ${dataRows.length} rows) to ${outPath}`,
);
console.log(
	`  · ${totalBlogs} blogs across ${projectsWithBlogs} projects`,
);
console.log(`  · ${totalPrs} PRs across ${projectsWithPrs} projects`);
