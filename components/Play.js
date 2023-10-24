"use client";
import MainCard from "./MainCard";
import { useRouter } from "next/router";

export default function PlayPage({ username }) {
  const router = window.location;
  //   console.log(router.hash);
  return (
    <div id="play" className="w-screen px-4 py-10 flex flex-col gap-4">
      <section className="flex flex-col items-center gap-4">
        <MainCard />
        <div className="bg-gray-200 self-stretch py-8 flex flex-col items-center gap-4 rounded-xl">
          <b>Step 1: Copy your link.</b>
          <p className="text-gray-800">{router.origin + "/" + username}</p>
          <button className="px-8 font-bold border border-black border-4 rounded-full">
            copy link
          </button>
        </div>
      </section>

      <section className="bg-gray-200 self-stretch px-8 py-8 flex flex-col items-center gap-4 rounded-xl">
        <b>Step 2: Share link on your story.</b>
        <button className="w-full bg-black text-white font-bold px-10 py-4 rounded-full">
          Share!
        </button>
      </section>
    </div>
  );
}
