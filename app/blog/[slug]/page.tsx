import { notFound } from "next/navigation";

import { BlogContent } from "@/app/_components/blog/blogContent";
import {
  getAllPostIds,
  parseMarkdownToHTML,
  readMarkdownFile,
} from "@/app/_utils/readMarkdownFiles";
import { getIconFromTagName } from "@/app/_utils/tagNameToIconMap";
import { BlogStickyHeader } from "@/app/_components/blog/blogStickyHeader";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { metadata, content } = readMarkdownFile(
    `app/_markdownFiles/${slug}.md`
  );

  const htmlContent = parseMarkdownToHTML(content);

  const formattedDate =
    metadata.date instanceof Date
      ? metadata.date.toLocaleString()
      : metadata.date;

  const tags = metadata.tags?.map((tag) => getIconFromTagName(tag));

  // --- RENDER ---

  if (!content) {
    notFound();
  }

  return (
    <div>
      <BlogStickyHeader
        title={metadata.title}
        tags={tags}
        date={formattedDate}
      />

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
