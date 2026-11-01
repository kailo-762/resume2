import Link from "next/link";

import { BlogHeader } from "@/app/_components/blog/blogHeader";
import { getSortedMarkdownData } from "@/app/_utils/readMarkdownFiles";
import { getIconFromTagName } from "@/app/_utils/tagNameToIconMap";

const Blog = () => {
  const markdownData = getSortedMarkdownData();

  // --- RENDER ---

  return (
    <section>
      <BlogHeader />
      <ul className="space-y-4">
        {markdownData.map(({ id, matterResultData }) => {
          const tags = matterResultData.tags
            ? (matterResultData.tags as string[])
            : undefined;

          const tagIcons = tags?.map((tag) => getIconFromTagName(tag));

          return (
            <div className="flex items-center gap-8 mt-4 mb-4">
              <li key={id}>
                <Link
                  href={`/blog/${id}`}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {matterResultData.title}
                </Link>
              </li>

              {tagIcons}
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Blog;
