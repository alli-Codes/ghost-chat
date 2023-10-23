"use client";
import Link from "next/link";
import Button from "@/components/Button";
import AuthenticatedUser from "@/middleware/AuthenticatedUser";

export default function Home() {
  return (
    <AuthenticatedUser>
      <div className="h-screen flex flex-col items-stretch justify-center">
        <div className="px-4 flex flex-col">
          <p>Welcome !!!</p>
        </div>
      </div>
    </AuthenticatedUser>
  );
}
