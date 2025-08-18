"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm flex gap-1">
      <Link href="/" className="text-gray-400">
        Home
      </Link>
      {segments.map((segment, idx) => {
        const isLast = idx === segments.length - 1;
        const href = "/" + segments.slice(0, idx + 1).join("/");

        return (
          <span key={idx} className="flex items-center gap-1">
            <span className="text-gray-400">/</span>
            {isLast ? (
              <span className="text-black">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            ) : (
              <Link href={href} className="text-gray-400">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
