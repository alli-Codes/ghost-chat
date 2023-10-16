import Link from "next/link";
import Button from "@/components/Button";

export default function Signup() {
  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <form className="flex flex-col items-center px-4 gap-4">
        <input
          type="email"
          placeholder="Email"
          className="bg-white w-full p-4 border border-1 active:outline outline-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white w-full p-4 border border-1 active:outline outline-black"
        />

        <Button content={"Sign Up"} />
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
