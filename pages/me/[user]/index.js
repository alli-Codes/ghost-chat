import { useRouter } from "next/router";
import getUserInfo from "@/utils/getUserInfo";

export default function SendMessage(props) {
  const router = useRouter();
  console.log(router);
  if (router.query.user == "u")
    return (
      <div>
        <p>Hellooo</p>
      </div>
    );
}
