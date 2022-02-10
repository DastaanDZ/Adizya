import Link from "next/link"

import SidebarData from "../../data/SidebarData"
import Larr from "../../assets/Larr"

import styles from '../sidebar/sidebar.module.css'

const Sidebar = ({show, onClick}) => {

    return (
        <>
        <div> 
        <div className={show ? styles.side_menu_active : styles.side_menu }>
        <ul className={styles.ul}>
            {SidebarData.map((items, index) =>{
                return(
                    <li key={index} className={styles.li} onClick={() => onClick(items)}>
                        <a className={styles.a}>
                        <h3 className={styles.sidebar_title}> 
                        {items.title}
                        </h3> 
                        </a>
                    </li>
                )
            })}
        </ul>
        </div>
        <div className={show ? styles.hidden_active : styles.hidden }>
            <p className={styles.hidden_p}>Heelo</p>
        </div>
        </div>
        
        {/* <div className={styles.open}> 
        <Larr onClick={showSidebar}/>
        </div> */}
        </>
    )
}

export default Sidebar
