import { useState } from "react";
import Link from "next/link";
import RegForm from "../../components/registration";
import Sidebar from "../../components/sidebar/Sidebar";
import Larr from "../../assets/Larr";
import icon from "../../assets/images/icon.png";
import Reg from "../../assets/images/reg.png";
import Lec1 from "../../assets/images/lec2.jpg";
import styles from "./registration.module.css";
import logout from "@/lib/logout";
import { useRouter } from "next/router";

const Index = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const router = useRouter();
  return (
    <>
      <div className={styles.regform}>
        <div className={styles.mobile_top_div}>
          <Link href="/">
            <img src={icon.src} alt="xxx" className={styles.icon} />
          </Link>
          <p
            className={styles.login}
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href="/">
              <img src={icon.src} alt="xxx" className={styles.icon} />
            </Link>
            <div className={styles.home_login_container}>
              <Link href="/">
                <p className={styles.login}>Home</p>
              </Link>
              <p
                className={styles.login}
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
          <div className={styles.open}>
            <div className={styles.larr_h1_container}>
              <Link href={"/"}>
                <Larr onClick={showSidebar} />
              </Link>
              <h1 className={styles.h1}>Registration</h1>
            </div>
            <img src={Lec1.src} alt="" className={styles.user_image_mob} />
          </div>
          <div className={styles.img_form_container}>
            <div className={styles.image_container}>
              <img src={Reg.src} alt="xxx" className={styles.image} />
            </div>
            <div className={styles.regform_container}>
              <RegForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
