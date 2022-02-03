import { useState } from "react"

import Sidebar from "../../components/sidebar/Sidebar"
import Larr from "../../assets/Larr"
import Lec1 from "./Lec1"
import Form from '../../components/registerform'

import styles from '../lectures/lectures.module.css'

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
                <Form/>
            </div>     
        </div>

    </>
    )
}

export default index
