import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MAX_EDGE = 1920;
const JPEG_QUALITY = 82;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...walk(fullPath));
        } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }

    return files;
};

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const compressFile = async (filePath) => {
    const before = fs.statSync(filePath).size;
    const ext = path.extname(filePath).toLowerCase();
    const image = sharp(filePath).rotate();
    const meta = await image.metadata();

    let pipeline = image;
    if (meta.width && meta.height && Math.max(meta.width, meta.height) > MAX_EDGE) {
        pipeline = pipeline.resize({
            width: MAX_EDGE,
            height: MAX_EDGE,
            fit: "inside",
            withoutEnlargement: true,
        });
    }

    const tempPath = `${filePath}.tmp`;

    if (ext === ".png") {
        await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tempPath);
    } else {
        await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tempPath);
    }

    fs.renameSync(tempPath, filePath);
    const after = fs.statSync(filePath).size;

    return { before, after };
};

const files = walk(ROOT);
let saved = 0;

console.log(`Compressing ${files.length} images under public/images…`);

for (const file of files) {
    const rel = path.relative(process.cwd(), file);
    try {
        const { before, after } = await compressFile(file);
        saved += before - after;
        if (after < before) {
            console.log(`${rel}: ${formatBytes(before)} → ${formatBytes(after)}`);
        }
    } catch (error) {
        console.error(`${rel}: failed`, error.message);
    }
}

console.log(`Done. Total saved: ${formatBytes(saved)}.`);
