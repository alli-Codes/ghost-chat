import Header from "@/components/Header";
import InboxPage from "@/components/Inbox";
import PlayPage from "@/components/Play";
import { useEffect, useRef } from "react";

export default function DefaultLayout({ userInfo }) {
  const layoutContainer = useRef(null);
  return (
    <div className="overflow-x-hidden" ref={layoutContainer}>
      {" "}
      <section className="mb-10">
        <nav className="bg-white w-full px-4 py-4 flex items-center justify-between fixed">
          <Header parent={layoutContainer} />
          <div className=" flex flex-col items-center">
            <div className="bg-gray-100 px-5 py-1 flex items-center gap-2 rounded-full relative">
              <b>{userInfo.username}</b>
              <div className="h-10 w-10 bg-black rounded-full"></div>
            </div>
          </div>
        </nav>
      </section>
      <main className="w-[200vw] flex">
        <PlayPage username={userInfo.username} />
        <InboxPage />
      </main>
    </div>
  );
}
