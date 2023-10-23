"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AuthenticatedUser(props) {
  const router = useRouter();
  const auth = getAuth();
  const [uid, setUid] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      router.push("/get-started");
    }
  });
  return uid ? props.children : undefined;
}
