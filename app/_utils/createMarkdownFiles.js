const fs = require("fs");
const path = require("path");

const folderPath = path.join(process.cwd(), "app/_markdownFiles/");

function createMarkdownFile(metadata) {
    // Read existing files in the folder
    const files = fs.readdirSync(folderPath);
    const nextFileName = `${files.length + 1}.md`;

    const content = `---
  title: "${metadata.title}"
  date: "${metadata.date}"
  summary: "${metadata.description}"
  tags: [${metadata.tags
      .split(",")
      .map((tag) => `"${tag.trim()}"`)
      .join(", ")}] 
---
  `;

    fs.writeFileSync(path.join(folderPath, nextFileName), content, "utf-8");
    console.log(`File "${nextFileName}" created successfully.`);
}

// Example metadata (modify as needed)
const metadata = {
    title: "TITLE",
    date: "DATE",
    description: "Nothing.",
    tags: "tag1,tag2",
};

// Create new Markdown file
createMarkdownFile(metadata);
