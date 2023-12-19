---
title: "2023 Blog Refresh"
date: "2023-11-19"
summary: "Including some of my latest hot takes (okay they are pretty mild)."
---

I updated my blog this weekend and wanted to share some thoughts along the way:

- [Content Management](#content-management)
- [Performance](#performance)
- [Opinions](#opinions)

<Callout emoji="⚠️">

**Disclaimer:** My site is my “breakable toy”. I enjoy and _intentionally_ change technology and try new patterns here. I'd encourage you to do the same and then write about why you made those choices.

</Callout>

## Content Management

I've moved my content from HTML to vanilla Markdown, to MDX, to a CMS, and back to MDX over the years. My content requirements as of now are:

1. Written in Markdown¹
2. Support for syntax highlighting, embedded tweets, and other components
3. Managed through version control²
4. Minimal external dependencies

My goal was to simplify without giving up too many features.

### Retrieving Content

You can go surprisingly far with just Node.js and JavaScript. You'll notice a theme start to emerge in this blog post: fewer dependencies, and more copy/paste-able code.

I removed the following libraries:

- `contentlayer`
- `next-contentlayer`
- `rehype-autolink-headings`
- `rehype-pretty-code`
- `rehype-slug`
- `remark-gfm`
- `shiki`

I was still able to maintain almost all of my content requirements with not much code. For example, here's how I'm able to retrieve all of my blog posts:

```js
import fs from "fs";
import path from "path";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}
```

That's not too bad. So what am I missing? Well, Contentlayer gives you Fast Refresh for your content. That's nice. You can [workaround this](https://github.com/gaearon/overreacted.io/pull/797) or just use `@next/mdx`, which I might do. Contentlayer has other features, too, but they're unnecessary for my blog.

### Remark and Rehype

What about the AST modifications for auto-linking headings, adding IDs, and supporting syntax highlighting? I don't know why I didn't think of this before, but you can just… use React components.

```js
import { highlight } from "sugar-high"; // 1KB new dependency

// This replaces rehype-pretty-code and shiki
function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// This replaces rehype-slug
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// This replaces rehype-autolink-headings
function createHeading(level) {
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}
```

Oh and that `remark-gfm` I was using for the GitHub style Markdown tables? Again, you can use a React component for that.

```js
function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
```

### Dependency Minimalism

Why go through all of this work to delete dependencies?

After having a blog for 10 years, I've gained a new appreciation for keeping things simple. Now, I'm not going _full_ minimalist here. I still want nice things. But I'm taking more opportunities to simplify and keep more code managed in the repo.

Shoutout to [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) and [react-tweet](https://react-tweet.vercel.app/).

## Performance

Earlier this year, I moved this blog to the [Next.js App Router](https://nextjs.org/docs/app). That came with a subtle but important change: [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) by default.

### Server Components

Server Components are fun. For example, I can embed tweets inside blog posts:

```js
<Tweet id="1457032789883187201" />
```

The `Tweet` component handles both data fetching _and_ creating UI, all bundled up in a handy npm package (worth an exception here). Notably, additional Server Components added to my pages aren't increasing the client-side JavaScript bundle. This “templating” remains server-only.

Another example is on [my work page](https://leerob.io/work). I love that I can drop this component in anywhere:

```js
async function Stars() {
  let res = await fetch("https://api.github.com/repos/vercel/next.js");
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}
```

# Partial Prerendering

We're also working on something new in Next.js I'm now using here. It enables Next.js to prerender as much of the page as possible to static, leaving holes for dynamic components.

For example, 98% of this blog post page is work that can be prerendering during the build. However, those view counts at the top of the page should be dynamic on every request. With [Partial Prerendering](https://www.partialprerendering.com/), the code for that looks like:
