"use client";
import Link from "next/link";

export default function Header() {
  const router = window.location;
  return (
    <div className="flex gap-4 text-lg font-bold">
      <a
        href="#play"
        className={
          router.hash == "#play" || router.hash == ""
            ? "text-black"
            : "text-gray-400"
        }
      >
        PLAY
      </a>
      <a
        href="#inbox"
        className={router.hash == "#inbox" ? "text-black" : "text-gray-400"}
      >
        INBOX
      </a>
    </div>
  );
}
