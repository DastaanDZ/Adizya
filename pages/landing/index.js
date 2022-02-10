import Link from "next/link";
import { signInWithGoogle } from "@/lib/login";
import logout from "@/lib/logout";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";

import Hero from "../../assets/Hero";
import icon from "../../assets/images/icon.png";
import Bg from '../../components/bgvid'

import styles from "../landing/landing.module.css";
import NewHero from "assets/NewHero";
import FinalHero from "assets/FinalHero";

const Index = () => {
  const { auth, setName, setIsNewReg } = useUserContext();
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
      <Bg/>
      <div className={styles.nav}> 
        <Link href="/">
          <img src={icon.src} alt="xxx" className={styles.icon} />
        </Link>
        <div className={styles.login_profile_container}>
          {!auth.userIsLogIn ? (
            <p
              className={styles.login}
              onClick={() => {
                signInWithGoogle(setName, setIsNewReg);
              }}
            >
              Login
            </p>
          ) : (
            <p
              className={styles.login}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </p>
          )}
          {auth.userIsLogIn ? (
            <p
              className={styles.profile}
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
        <div className={styles.hero_container}>
          <FinalHero/>
        </div>
      </div>
    </>
  );
};

export default Index;
