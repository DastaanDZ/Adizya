import { useState, useEffect } from "react";
import Link from "next/link";
import logout from "@/lib/logout";
import Sidebar from "../../components/sidebar/Sidebar";
import Larr from "../../assets/Larr";
import Eve1 from "./Eve1";
import Eve2 from "./Eve2";
import Eve3 from "./Eve3";
import Eve4 from "./Eve4";
import Eve5 from "./Eve5";
import Eve6 from "./Eve6";
import Eve7 from "./Eve7";
import icon from "../../assets/images/icon.png";
import { useUserContext } from "@/context/userContext";
import styles from "./lectures.module.css";
import { useRouter } from "next/router";
import getMe from "@/lib/getMe";
import { signInWithGoogle } from "@/lib/login";

const Index = () => {
  const router = useRouter();

  const { auth, name, setName, id, setId, setIsNewReg } = useUserContext();
  const [inst, setInst] = useState();
  const [state, setState] = useState();
  const [phoneNo, setPhoneNo] = useState();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      getMe(localStorage.getItem("uid")).then((res) => {
        setId(localStorage.getItem("customId"));
        setName(res.name);
        setInst(res.inst);
        setState(res.State);
        setPhoneNo(res.phoneno);
      });
    } else {
      router.push("/");
      signInWithGoogle(setName, setIsNewReg, "/events");
    }
  }, []);

  const [sidebar, setSidebar] = useState(true);
  const [event, setEvent] = useState("event1");

  const showSidebar = () => setSidebar(!sidebar);
  function handleSidebarClick(item) {
    if (item.component != "event7") setEvent(item.component);
  }

  function showEvent(event) {
    switch (event) {
      case "event1":
        return (
          <Eve1
            name={name}
            email={auth.user?.email}
            inst={inst}
            state={state}
            phoneNo={phoneNo}
            adyziaId={id}
          />
        );
        break;
      case "event2":
        return (
          <Eve2
            name={name}
            email={auth.user?.email}
            inst={inst}
            state={state}
            phoneNo={phoneNo}
            adyziaId={id}
          />
        );
        break;
      case "event3":
        return <Eve3 />;
        break;
      case "event4":
        return <Eve4 />;
        break;
      case "event5":
        return <Eve5 />;
        break;
      case "event6":
        return <Eve6 />;
        break;
      case "event7":
        return <Eve7 />;
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
        <Sidebar
          show={sidebar}
          onClick={handleSidebarClick}
          category="events"
        />
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
