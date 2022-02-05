import Link from "next/link";
import Hero from "../../assets/Hero";
import icon from "../../assets/images/icon.png";
import styles from "../landing/landing.module.css";
import { signInWithGoogle } from "@/lib/login";
import logout from "@/lib/logout";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
const index = () => {
  const { auth, setName, setIsNewReg } = useUserContext();
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
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
        <div className={styles.hero_container}>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default index;
