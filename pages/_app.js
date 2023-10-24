import "../styles/globals.css";
import { initializeApp } from "firebase/app";
import DefaultLayout from "@/app/layout";

const firebaseConfig = {
  apiKey: "AIzaSyBaoNrbv4LseDaYiNbGCEEPPTGhaMOGOok",
  authDomain: "anonymous-texts-6f7ad.firebaseapp.com",
  projectId: "anonymous-texts-6f7ad",
  storageBucket: "anonymous-texts-6f7ad.appspot.com",
  messagingSenderId: "184414442175",
  appId: "1:184414442175:web:da85cb595b415e7edaec0a",
  measurementId: "G-5D4KVZVNJW",
};

const MyApp = function ({ Component, pageProps }) {
  const firebaseApp = initializeApp(firebaseConfig);
  //   console.log(firebaseApp);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
