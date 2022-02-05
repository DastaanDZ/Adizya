import Link from "next/link";
import Hero from "../../assets/Hero";
import icon from "../../assets/images/icon.png";
import styles from "../landing/landing.module.css";
import { signInWithGoogle } from "@/lib/login";
import logout from "@/lib/logout";
import { useUserContext } from "@/context/userContext";

const index = () => {
  const { auth, setName, setIsNewReg } = useUserContext();
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <img src={icon.src} alt="xxx" className={styles.icon} />
        </Link>
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
        <p className={styles.profile}>Profile</p>
        <div className={styles.hero_container}>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default index;
