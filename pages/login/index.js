"use client";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";

// Firebase importings
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const router = useRouter();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  let email = undefined;
  let password = undefined;
  const auth = getAuth();
  const loginForm = useRef(null);

  const getUserDetails = function () {
    email = emailInput.current.value;
    password = passwordInput.current.value;
  };

  const loginUser = function (e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <form
        className="flex flex-col items-center px-4 gap-4"
        onChange={getUserDetails}
        onSubmit={loginUser}
        ref={loginForm}
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

        <Button content={"Login"} />
        <p>
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
