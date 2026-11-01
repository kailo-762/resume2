export default function MoroccoTripLoading() {
  return (
    <div className="py-6 animate-pulse">
      <div className="h-10 w-56 bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
      <div className="h-7 w-full max-w-md bg-neutral-200 dark:bg-neutral-800 rounded mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
