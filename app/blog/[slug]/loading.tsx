export default function BlogPostLoading() {
  return (
    <div className="animate-pulse">
      <div className="p-4 rounded bg-neutral-100 dark:bg-neutral-900 mb-8">
        <div className="h-8 w-3/4 max-w-lg bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
        <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded ml-auto" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded"
            style={{ width: `${88 - (index % 3) * 12}%` }}
          />
        ))}
      </div>
    </div>
  );
}
