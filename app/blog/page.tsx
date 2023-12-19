import { BlogHeader } from "@/app/_components/blog/blogHeader";
import { getSortedMarkdownData } from "@/app/_utils/readMarkdownFiles";
import Link from "next/link";

const Blog = () => {
  const markdownData = getSortedMarkdownData();

  // --- RENDER ---

  return (
    <section>
      <BlogHeader />
      <ul className="space-y-4">
        {markdownData.map(({ id, matterResultData }) => (
          <li key={id}>
            <Link
              href={`/blog/${id}`}
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
            >
              {matterResultData.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
