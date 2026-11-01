import Link from "next/link";

import { BlogHeader } from "@/app/_components/blog/blogHeader";
import { getSortedMarkdownData } from "@/app/_utils/readMarkdownFiles";
import { TagIcon } from "@/app/_utils/tagNameToIconMap";

const Blog = () => {
  const markdownData = getSortedMarkdownData();

  return (
    <section>
      <BlogHeader />
      <ul className="space-y-4">
        {markdownData.map(({ id, matterResultData }) => {
          const tags = matterResultData.tags
            ? (matterResultData.tags as string[])
            : undefined;

          return (
            <li
              key={id}
              className="flex items-center gap-8 mt-4 mb-4 list-none"
            >
              <Link
                href={`/blog/${id}`}
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                {matterResultData.title}
              </Link>

              {tags?.map((tag) => (
                <TagIcon key={tag} tag={tag} />
              ))}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Blog;
