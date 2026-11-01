import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

type ImageUtilsResult = string[] | null;

export const getImagesInDirectory = (directory: string): ImageUtilsResult => {
  const directoryPath = path.join(process.cwd(), "public", "images", directory);

  if (typeof window !== "undefined") {
    return null;
  }

  try {
    const files = fs.readdirSync(directoryPath);
    const images = files
      .filter((file) =>
        IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase())
      )
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/images/${directory}/${file}`);

    return images.length > 0 ? images : null;
  } catch (error) {
    console.error(`Error reading directory: ${directoryPath}`, error);
    return null;
  }
};
