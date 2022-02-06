import { useState } from "react"
import Link from "next/link"

import Sidebar from "../../components/sidebar/Sidebar"
import Larr from "../../assets/Larr"
import Lec1 from "./Lec1"
import Form from '../../components/registerform'
import icon from '../../assets/images/icon.png'

import styles from '../lectures/lectures.module.css'

const Index = () => {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <div className={styles.container}>
            <div className={styles.mobile_top_div}>
            <div className={styles.icon_login_container}> 
            <Link href='/'> 
      <img src={icon.src} alt="xxx" className={styles.icon} />
    </Link>
    <p className={styles.login}>Login</p> 
            </div>
    <div className={styles.open}> 
                    <Larr onClick={showSidebar}/>
                </div>
            </div>
            <Sidebar sidebar={sidebar}/>
            <div className={styles.page}> 
                {/* <div className={styles.open}> 
                    <Larr onClick={showSidebar}/>
                </div> */}
                <Lec1/>
                {/* <Form/> */}
            </div>     
        </div>

    </>
    )
}

export default Index
