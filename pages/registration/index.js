import { useState } from 'react'

import RegForm from '../../components/regform'
import Sidebar from "../../components/sidebar/Sidebar"
import Larr from "../../assets/Larr"

import styles from '../registration/registration.module.css'

const index = () => {

  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className={styles.regform}>
    <Sidebar sidebar={sidebar}/>
    <div className={styles.container}>
    <div className={styles.open}> 
                    <Larr onClick={showSidebar}/>
                    <h1 className={styles.h1}>Registration</h1>
                </div>
                <div className={styles.img_form_container}> 
        <div className={styles.image_container}>
            <img src='/lec1.jpg' alt="xxx" className={styles.image}/>
        </div>
        <div className={styles.regform_container}> 
        <RegForm/>
        </div>
                </div>
    </div>
    </div>
    </>
  )
}

export default index
