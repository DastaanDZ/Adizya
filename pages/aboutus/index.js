import Link from 'next/link'

import Nav from '../../components/navbar'
import Larr from "../../assets/Larr";

import styles from '../../pages/team/team.module.css'
 

const index = () => {
  return (
    <>
      <img src={rise.src} alt=""  className={styles.bg}/>
      <div className={styles.team_container}>
          <Nav/>
          <div className={styles.larr_h1_container}>
              <Link href="/">
                <Larr/>
              </Link>
              <h1 className={styles.h1}>Team</h1>
            </div>
            
      </div>
    </>
  )
}

export default index
