import { useState } from "react";

import Link from "next/link";
import RegForm from "../../components/regform";
import Sidebar from "../../components/sidebar/Sidebar";
import Larr from "../../assets/Larr";
import icon from "../../assets/images/icon.png";

import styles from "../registration/registration.module.css";

const Index = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.regform}>
        <div className={styles.mobile_top_div}>
          <Link href="/">
            <img src={icon.src} alt="xxx" className={styles.icon} />
          </Link>
          <p className={styles.login}>Login</p>
        </div>
        <div className={styles.container}>
        <div className={styles.nav}>
        <Link href="/">
            <img src={icon.src} alt="xxx" className={styles.icon} />
          </Link>
          <div className={styles.home_login_container}> 
          <Link href='/'> 
          <p className={styles.login}>Home</p>
          </Link>
          <Link href='/'> 
          <p className={styles.login}>Login</p>
          </Link>
          </div>
        </div>
          <div className={styles.open}>
            <Larr onClick={showSidebar} />
            <h1 className={styles.h1}>Registration</h1>
          </div>
          <div className={styles.img_form_container}>
            <div className={styles.image_container}>
              <img src="/lec1.jpg" alt="xxx" className={styles.image} />
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
