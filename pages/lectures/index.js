import { useState } from "react"
import Link from "next/link"

import Sidebar from "../../components/sidebar/Sidebar"
import Larr from "../../assets/Larr"
import Lec1 from "./Lec1"
import icon from '../../assets/images/icon.png'

import styles from '../lectures/lectures.module.css'
import { useRouter } from "next/router"

const Index = () => {

    const router = useRouter()

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar);

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
                    <Larr onClick={showSidebar}/>
                </div>
          </div>
            <Sidebar sidebar={sidebar}/>
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
                    <Larr onClick={showSidebar}/>
                </div>
                <Lec1/>
            </div>     
        </div>

    </>
    )
}

export default Index
