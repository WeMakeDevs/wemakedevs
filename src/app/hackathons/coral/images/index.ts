// Placeholder: use the same cover/thumbnail pattern as other hackathons.
// Replace these with actual pirate-themed images when available.
// For now we re-export a fallback so the build doesn't break.
import cover from "@/app/hackathons/2fast2mcp/images/cover.jpg";
import thumbnail from "@/app/hackathons/2fast2mcp/images/thumbnail.jpg";

export const images = {
	cover,
	thumbnail,
} as const;
