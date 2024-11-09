import fs from "fs/promises";
import path from "path";
import { StaticImageData } from "next/image";
import { HackathonData } from "@/types";

// Import all images
import {
  codefest2024Thumbnail,
  codefest2024Cover,
  hackForGoodThumbnail,
  hackForGoodCover,
  hackfrost24Cover
} from "@/assets/images";
// Add more imports for other hackathons as needed

const imageMap: Record<
  string,
  { cover: StaticImageData; thumbnail: StaticImageData }
> = {
  "codefest-2024": {
    cover: codefest2024Cover,
    thumbnail: codefest2024Thumbnail,
  },
  "hack-for-good": { cover: hackForGoodCover, thumbnail: hackForGoodThumbnail },
  "hackfrost24": { cover: hackfrost24Cover, thumbnail: hackForGoodThumbnail }
  // Add more mappings for other hackathons as needed
};

function getImagePaths(slug: string): {
  thumbnail: StaticImageData;
  cover: StaticImageData;
} {
  const images = imageMap[slug];
  if (!images) {
    console.warn(`Warning: Images not found for hackathon: ${slug}`);
    // Return a default image or placeholder if needed
    return {
      thumbnail: codefest2024Thumbnail, // Use a default thumbnail
      cover: codefest2024Cover, // Use a default cover
    };
  }
  return images;
}

export async function fetchHackathonData(): Promise<HackathonData[]> {
  const hackathonsDir = path.join(process.cwd(), "hackathons");
  const hackathons: HackathonData[] = [];

  try {
    const dirs = await fs.readdir(hackathonsDir);

    for (const dir of dirs) {
      const hackathonPath = path.join(hackathonsDir, dir);
      const stat = await fs.stat(hackathonPath);

      if (stat.isDirectory()) {
        const dataPath = path.join(hackathonPath, "data.json");
        const dataContent = await fs.readFile(dataPath, "utf-8");
        const data: Omit<HackathonData, "image"> & Record<string, any> = JSON.parse(dataContent);

        // Set image paths
        const images = getImagePaths(data.slug);

        // Read MDX files
        const mdxFiles = ["overview", "resources", "rules", "sponsor", "judgingCriteria"];
        for (const file of mdxFiles) {
          const filePath = path.join(hackathonPath, `${file}.mdx`);
          const content = await fs.readFile(filePath, "utf-8");
          data[file] = content;
        }

        hackathons.push({
          ...data,
          image: images,
        });
      }
    }

    hackathons.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    });

    return hackathons;
  } catch (error) {
    console.error("Error fetching hackathon data:", error);
    return [];
  }
}
