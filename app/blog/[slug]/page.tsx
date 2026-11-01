import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogContent } from "@/app/_components/blog/blogContent";
import { getAllPostIds, parseMarkdownToHTML, readMarkdownFile } from "@/app/_utils/readMarkdownFiles";
import { BlogStickyHeader } from "@/app/_components/blog/blogStickyHeader";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const { metadata } = readMarkdownFile(`app/_markdownFiles/${slug}.md`);
        return {
            title: String(metadata.title ?? slug),
            description: String(metadata.summary ?? ""),
        };
    } catch {
        return { title: "Post not found" };
    }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const { slug } = await params;

    let metadata: Record<string, unknown>;
    let content: string;

    try {
        const file = readMarkdownFile(`app/_markdownFiles/${slug}.md`);
        metadata = file.metadata;
        content = file.content;
    } catch {
        notFound();
    }

    if (!content) {
        notFound();
    }

    const htmlContent = parseMarkdownToHTML(content);

    const formattedDate = metadata.date instanceof Date ? metadata.date.toLocaleString() : String(metadata.date ?? "");

    const tags = Array.isArray(metadata.tags) ? (metadata.tags as string[]) : undefined;

    return (
        <div>
            <BlogStickyHeader title={String(metadata.title ?? "")} tags={tags} date={formattedDate} />

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
