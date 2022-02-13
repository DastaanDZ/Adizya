import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Landing from "../pages/landing";

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
      <Head>
        <title>Adizya&apos;21</title>
        <meta
          name="description"
          content="Adizya, revolution del' art, is an architectural extravaganza taking place during Tathva, the technical fest of NIT Calicut.Adizya brings to you an exclusive space to showcase your creativity and incline towards art and design, providing us with an opportunity to colour outside the lines and weave reality out of the imagination in our minds."
        />
      </Head>
      <Landing />
    </>
  );
}
