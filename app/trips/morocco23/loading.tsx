export default function MoroccoTripLoading() {
    return (
        <div className="animate-pulse py-6">
            <div className="mb-4 h-10 w-56 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mb-8 h-7 w-full max-w-md rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="aspect-[4/3] rounded-lg bg-neutral-200 dark:bg-neutral-800" />
                ))}
            </div>
        </div>
    );
}
