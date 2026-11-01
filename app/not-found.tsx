import Link from "next/link";

export default function NotFound() {
    return (
        <section className="prose prose-neutral dark:prose-invert">
            <h1 className="text-2xl font-medium tracking-tighter">Page not found</h1>
            <p>That URL does not match anything on this site.</p>
            <Link href="/" className="text-blue-500 hover:text-blue-700">
                Back to home
            </Link>
        </section>
    );
}
