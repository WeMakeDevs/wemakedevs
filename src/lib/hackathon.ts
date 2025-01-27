import fs from "node:fs";
import path from "node:path";

export function getAllHackathonsData() {
	const hackathonsDir = path.join(process.cwd(), "src/app/hackathons");

	// Get all directories inside hackathons folder
	const hackathonFolders = fs.readdirSync(hackathonsDir).filter(folder => {
		return (
			fs.statSync(path.join(hackathonsDir, folder)).isDirectory() &&
			folder !== "page.tsx"
		); // Exclude the page.tsx file
	});

	const hackathonsData = hackathonFolders.map(folder => {
		const dataPath = require(`@/app/hackathons/${folder}/data.ts`);

		return {
			...dataPath.default, // Assuming you're exporting as default
		};
	});

	return hackathonsData;
}
