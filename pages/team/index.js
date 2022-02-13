import Link from 'next/link'

import Nav from '../../components/navbar'
import Larr from "../../assets/Larr";
import TeamData from '../../data/TeamData'
import rise from '../../assets/images/RISE.png'

import styles from '../../pages/team/team.module.css'
import Linkden from 'assets/Linkden';

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
            <div className={styles.wrapper}> 
            {TeamData.map((items, index) =>{
                return(
                    <div key={index} className={styles.profile_container}>
                    <a href={items.profile} className={styles.profile}> 
                        <img src={items.pic.src} alt={items.title} className={styles.pic}/>
                        <div className={styles.overlay}></div>
                        <div className={styles.profile_info_container}>
                        <div className={styles.detail_container}> 
                            <p className={styles.detail1}>{items.title}</p>
                            <p className={styles.detail2}>{items.position}</p>
                        </div>
                            <Linkden/>
                        </div>
                    </a>
                    </div>
                )
            })}
            </div>
      </div>
    </>
  )
}

export default index
