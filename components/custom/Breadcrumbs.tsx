"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-600 mb-4">
      <Link href="/" className="hover:text-gray-900 flex items-center">
        <Home className="w-4 h-4" />
      </Link>
      {paths.map((path, index) => (
        <div key={path} className="flex items-center">
          <span className="mx-2">/</span>
          <Link
            href={`/${paths.slice(0, index + 1).join("/")}`}
            className="capitalize hover:text-gray-900"
          >
            {path}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
