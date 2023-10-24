"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import getUserInfo from "@/utils/getUserInfo";
import MyContextFunction from "@/utils/MyContext";
import HomePage from "@/components/HomePage";
import DefaultLayout from "@/app/layout";

export default function AuthenticatedUser(props) {
  const router = useRouter();
  const auth = getAuth();
  const [uid, setUid] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      getUserInfo(user.uid).then((snapshot) => {
        if (snapshot.exists()) {
          setUserInfo(snapshot.val());
        }
      });
    } else {
      router.push("/get-started");
    }
  });
  return uid ? <DefaultLayout userInfo={userInfo} /> : undefined;
}
