"use client";
import Link from "next/link";
import Button from "@/components/Button";
import AuthenticatedUser from "@/middleware/AuthenticatedUser";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return <AuthenticatedUser />;
}
