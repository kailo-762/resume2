export default function BlogPostLoading() {
    return (
        <div className="animate-pulse">
            <div className="mb-8 rounded bg-neutral-100 p-4 dark:bg-neutral-900">
                <div className="mb-4 h-8 w-3/4 max-w-lg rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="ml-auto h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="space-y-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-4 rounded bg-neutral-200 dark:bg-neutral-800"
                        style={{ width: `${88 - (index % 3) * 12}%` }}
                    />
                ))}
            </div>
        </div>
    );
}
