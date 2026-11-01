import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";

export const readMarkdownFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
};

export const parseMarkdownToHTML = (markdownContent: string) => {
  const result = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)
    .processSync(markdownContent);
  return result.toString();
};

const markdownFilesDirectory = path.join(process.cwd(), "app/_markdownFiles/");

type GetSortedMarkdownData = {
  id: string;
  matterResultData: Record<string, string | string[]>;
};

export const getSortedMarkdownData = (): GetSortedMarkdownData[] => {
  const fileNames = fs
    .readdirSync(markdownFilesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  const allPostsData: GetSortedMarkdownData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(markdownFilesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      matterResultData: matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    const dateA = String(a.matterResultData.date ?? "");
    const dateB = String(b.matterResultData.date ?? "");
    return dateA < dateB ? 1 : -1;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs
    .readdirSync(markdownFilesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
};
