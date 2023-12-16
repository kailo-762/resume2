import { Badge } from "@/app/_components/badge";
import Link from "next/link";

export const WorkIntro = () => {
  return (
    <>
      <p>
        On a mission to help fill{" "}
        <Link href="https://www.workwise.io" target="_blank">
          <span className="font-bold underline text-blue-500">1.000.000</span>{" "}
        </Link>
        jobs at <Badge>Workwise</Badge>. And along the way, have some fun
        developing new features. Here's a summary of my work so far.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </>
  );
};
