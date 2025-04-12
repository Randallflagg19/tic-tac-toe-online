import Link from "next/link";
import type React from "react";

export function BottomLink({text, linkText, url}: {
  text: string;
  linkText: string;
  url: string;
}) {
  return (
    <p className="text-sm text-gray-400">
      {text}{" "}
      <Link
        href={url}
        className="font-medium text-primary hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}