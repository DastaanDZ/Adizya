import { useState } from "react";
import Link from "next/link";

import Sidebar from "../../components/sidebar/Sidebar";
import Larr from "../../assets/Larr";
import Lec1 from "./Lec1";
import Lec2 from "./Lec2";
import Lec3 from "./Lec3";
import Lec4 from "./Lec4";
import Lec5 from "./Lec5";
import Lec6 from "./Lec6";
import Lec7 from "./Lec7";
import icon from "../../assets/images/icon.png";

import styles from "./lectures.module.css";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const [sidebar, setSidebar] = useState(true);
  const [event, setEvent] = useState("event1");

  const showSidebar = () => setSidebar(!sidebar);
  function handleSidebarClick(item) {
    if (item.component != "event7") setEvent(item.component);
  }

  function showEvent(event) {
    switch (event) {
      case "event1":
        return <Lec1 />;
        break;
      case "event2":
        return <Lec2 />;
        break;
      case "event3":
        return <Lec3 />;
        break;
      case "event4":
        return <Lec4 />;
        break;
      case "event5":
        return <Lec5 />;
        break;
      case "event6":
        return <Lec6 />;
        break;
      case "event7":
        return <Lec7 />;
        break;
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mob_nav}>
          <div className={styles.ihl_container}>
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
          <div className={styles.open_mob}>
            <Larr onClick={showSidebar} />
          </div>
        </div>
        <Sidebar show={sidebar} onClick={handleSidebarClick} />
        <div className={styles.page}>
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
            <Larr onClick={showSidebar} />
          </div>
          {showEvent(event)}
        </div>
      </div>
    </>
  );
};

export default Index;
