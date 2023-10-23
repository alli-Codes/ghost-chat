import Link from "next/link";
import Button from "@/components/Button";

export default function GetStarted() {
  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <div className="px-4 flex flex-col">
        <Link href="/signup">
          <Button content={"Get Started"} />
        </Link>
      </div>
    </div>
  );
}
