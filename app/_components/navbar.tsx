"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "home" },
  "/work": { name: "work" },
  "/blog": { name: "blog" },
  "/trips": { name: "trips" },
} as const;

const normalizePathname = (pathname: string) => {
  if (pathname.includes("/blog/")) {
    return "/blog";
  }
  return pathname;
};

export const Navbar = () => {
  const pathname = usePathname();

  if (pathname.includes("/blog/")) {
    return null;
  }

  const activePath = normalizePathname(pathname || "/");

  return (
    <aside className="-ml-[8px] mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6"
          id="nav"
          aria-label="Primary"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === activePath;

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-colors hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${
                    isActive ? "" : "text-neutral-500"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative font-light text-lg mb-8 tracking-tighter py-1 px-2">
                    {name}
                    <span
                      className={`absolute left-2 right-2 top-7 h-px bg-neutral-300 dark:bg-neutral-700 transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};
