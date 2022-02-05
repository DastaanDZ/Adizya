import Link from "next/link"

import Hero from "../../assets/Hero"
import icon from '../../assets/images/icon.png'

import styles from '../landing/landing.module.css'

const index = () => {
  return (
    <>
    <div className={styles.container}> 
    <Link href='/'> 
      <img src={icon.src} alt="xxx" className={styles.icon} />
    </Link>
    <p className={styles.login}>Login</p>
    <div className={styles.hero_container}> 
       <Hero/> 
    </div>
    </div>
    </>
  )
}

export default index
