type BlogContentProps = {
    htmlContent: string;
};

export const BlogContent = ({ htmlContent }: BlogContentProps) => (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="markdown-content" />
);
