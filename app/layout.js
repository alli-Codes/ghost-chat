import Header from "@/components/Header";
import InboxPage from "@/components/Inbox";
import PlayPage from "@/components/Play";

export default function DefaultLayout({ userInfo }) {
  return (
    <div className="overflow-hidden">
      {" "}
      <section className="mb-10">
        <nav className="bg-white w-full px-4 py-4 flex items-center justify-between fixed">
          <Header />
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
