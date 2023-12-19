import { BlogContent } from "@/app/_components/blog/blogContent";
import {
  getAllPostIds,
  parseMarkdownToHTML,
  readMarkdownFile,
} from "@/app/_utils/readMarkdownFiles";
import { notFound } from "next/dist/client/components/not-found";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { metadata, content } = readMarkdownFile(
    `app/_markdownFiles/${params.slug}.md`
  );

  const htmlContent = parseMarkdownToHTML(content);

  const formattedDate =
    metadata.date instanceof Date
      ? metadata.date.toLocaleString()
      : metadata.date;

  // --- RENDER ---

  if (!content) {
    notFound();
  }

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>Date: {formattedDate}</p>

      <BlogContent htmlContent={htmlContent} />
    </div>
  );
}

export async function generateStaticParams() {
  const ids = getAllPostIds();

  return ids.map(({ params }) => ({
    slug: params.id,
  }));
}
