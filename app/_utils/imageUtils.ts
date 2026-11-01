import fs from "fs";
import path from "path";

type ImageUtilsResult = string[] | null;

export const getImagesInDirectory = (directory: string): ImageUtilsResult => {
  const directoryPath = path.join(process.cwd(), "public", "images", directory);

  if (typeof window === "undefined") {
    try {
      const files = fs.readdirSync(directoryPath);
      const images = files.map((file) => `/images/${directory}/${file}`);
      return images;
    } catch (error) {
      console.error(`Error reading directory: ${directoryPath}`, error);
      return null;
    }
  }

  return null;
};
