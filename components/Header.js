"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Header({ parent }) {
  const router = window.location;
  let p = undefined;
  useEffect(() => (p = parent.current));
  const scrollPageX = function (state) {
    state ? (p.scrollLeft = -p.scrollWidth) : (p.scrollLeft = p.scrollWidth);
  };
  return (
    <div className="flex gap-4 text-lg font-bold">
      <a
        href="#play"
        className={
          router.hash == "#play" || router.hash == ""
            ? "text-black"
            : "text-gray-400"
        }
        onClick={() => scrollPageX(true)}
      >
        PLAY
      </a>
      <a
        href="#inbox"
        className={router.hash == "#inbox" ? "text-black" : "text-gray-400"}
        onClick={() => scrollPageX(false)}
      >
        INBOX
      </a>
    </div>
  );
}
