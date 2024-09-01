import fs from "fs/promises";
import path from "path";

interface HackathonData {
  title: string;
  image: {
    thumbnail: string;
    cover: string;
  };
  status: string;
  prize: number;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  slug: string;
  about: string;
  requirements: string;
  resources: string;
  rules: string;
}

async function getImagePaths(
  hackathonPath: string,
  slug: string,
): Promise<{ thumbnail: string; cover: string }> {
  const thumbnailPath = path.join(hackathonPath, "thumbnail.jpg");
  const coverPath = path.join(hackathonPath, "cover.jpg");

  const images = {
    thumbnail: `/hackathons/${slug}/thumbnail.jpg`,
    cover: `/hackathons/${slug}/cover.jpg`,
  };

  try {
    await fs.access(thumbnailPath);
    await fs.access(coverPath);
    return images;
  } catch (error) {
    console.warn(
      `Warning: One or more images not found for hackathon: ${slug}`,
    );
    return {
      thumbnail: images.thumbnail,
      cover: images.cover,
    };
  }
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
        const data: HackathonData = JSON.parse(dataContent);

        // Set image paths
        data.image = await getImagePaths(hackathonPath, data.slug);

        // Read MDX files
        const mdxFiles = ["about", "requirements", "resources", "rules"];
        for (const file of mdxFiles) {
          const filePath = path.join(hackathonPath, `${file}.mdx`);
          const content = await fs.readFile(filePath, "utf-8");
          data[file] = content;
        }

        hackathons.push(data);
      }
    }

    return hackathons;
  } catch (error) {
    console.error("Error fetching hackathon data:", error);
    return [];
  }
}
