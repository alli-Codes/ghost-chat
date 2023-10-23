"use client";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import setNewUser from "@/utils/setNewUser";

// Firebase importings
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const router = useRouter();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  let email = undefined;
  let password = undefined;
  const auth = getAuth();
  const signUpForm = useRef(null);

  const getUserDetails = function () {
    email = emailInput.current.value;
    password = passwordInput.current.value;
  };

  const createUser = function (e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // signUpForm.current.reset();
        console.log(res);
        setNewUser(res.user.uid, res.user.email);
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };

  // createUserWithEmailAndPassword(auth, email, password);

  return (
    <div className="h-screen flex flex-col items-stretch justify-center">
      <form
        className="flex flex-col items-center px-4 gap-4"
        onChange={getUserDetails}
        onSubmit={createUser}
        ref={signUpForm}
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
