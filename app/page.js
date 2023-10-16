import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <div className="px-4 flex flex-col">
        <Link href="/signup">
          <button className="bg-black w-full p-4 rounded-full text-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
