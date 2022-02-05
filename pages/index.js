import Landing from "../pages/landing";
import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const { isNewReg, id, setId, setIsNewReg } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (isNewReg) {
      setIsNewReg(false);
      setId(localStorage.getItem("customId"));
      router.push("/registration");
    }
  }, [isNewReg]);

  return (
    <>
      <Landing />
    </>
  );
}
