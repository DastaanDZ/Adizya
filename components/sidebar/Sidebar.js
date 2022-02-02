import Link from "next/link"
import { useState } from "react"

import Larr from "../../assets/Larr"
import SidebarData from "../../data/SidebarData"

import styles from '../sidebar/sidebar.module.css'

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)
    console.log(sidebar);
    return (
        <>
        <div className={sidebar ? styles.side_menu_active : styles.side_menu }>
        <ul className={styles.ul}>
            {SidebarData.map((items, index) =>{
                return(
                    <li key={index} className={styles.li}>
                        <Link href={items.path}>
                        <a >
                        <h3 className={styles.sidebar_title}> 
                        {items.title}
                        </h3> 
                        </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </div>
        {/* <div className={styles.open}> 
        <Larr onClick={showSidebar}/>
        </div> */}
        </>
    )
}

export default Sidebar
