import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";

export const readMarkdownFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
};

export const parseMarkdownToHTML = (markdownContent: string) => {
  const result = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .processSync(markdownContent);
  return result.toString();
};

const markdownFilesDirectory = path.join(process.cwd(), "app/_markdownFiles/");

type GetSortedMarkdownData = {
  id: string;
  matterResultData: Record<string, string>;
};

export const getSortedMarkdownData = (): GetSortedMarkdownData[] => {
  const fileNames = fs.readdirSync(markdownFilesDirectory);
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
    return a.date < b.date ? 1 : -1;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(markdownFilesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};
