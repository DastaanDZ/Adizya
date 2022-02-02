import { useState } from "react"

import Sidebar from "../../components/sidebar/Sidebar"
import Larr from "../../assets/Larr"

import styles from '../lectures/lectures.module.css'
import Lec1 from "./Lec1"

const index = () => {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <div className={styles.container}>
            <Sidebar sidebar={sidebar}/>
            <div className={styles.page}> 
                <div className={styles.open}> 
                    <Larr onClick={showSidebar}/>
                </div>
                <Lec1/>
            </div>     
        </div>

    </>
    )
}

export default index
