"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="mb-2 text-2xl font-medium tracking-tighter">Something went wrong</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
                This page hit an unexpected error. You can try again or head back home.
            </p>

            {process.env.NODE_ENV === "development" && error.message ? (
                <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                    {error.message}
                </pre>
            ) : null}

            <div className="not-prose mt-8 flex flex-wrap gap-4">
                <button
                    type="button"
                    onClick={reset}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-700"
                >
                    Back to home
                </Link>
            </div>
        </section>
    );
}
