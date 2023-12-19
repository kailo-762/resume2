"use client";

import { useEffect } from "react";
import Prism from "prismjs";

type BlogContentProps = {
  htmlContent: string;
};

export const BlogContent = ({ htmlContent }: BlogContentProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [htmlContent]);

  // --- RENDER ---

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="markdown-content"
    />
  );
};
