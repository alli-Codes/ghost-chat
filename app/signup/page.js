"use client";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/Button";

export default function Signup() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const getUserDetails = function () {
    let email = emailInput.current.value;
    let password = passwordInput.current.value;

    console.log(email, password);
  };

  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <form
        className="flex flex-col items-center px-4 gap-4"
        onChange={getUserDetails}
      >
        <input
          type="email"
          placeholder="Email"
          ref={emailInput}
          className="bg-white w-full p-4 border border-1 active:outline outline-black"
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordInput}
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
