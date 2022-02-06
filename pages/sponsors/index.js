import { useState } from 'react'
import Link from 'next/link'

import SponsorsData from '../../data/SponsorsData'
import icon from '../../assets/images/icon.png'

import styles from '../sponsors/sponsors.module.css'

const index = () => {
  return (
    <>
    <div className={styles.container}>
    <Link href='/'> 
      <img src={icon.src} alt="xxx" className={styles.icon} />
      </Link> 
         <div className={styles.title}> 
       <h1 className={styles.h1}>SPONSORS</h1>
       <hr className={styles.hr}/>
    </div>
    <div className={styles.image_container}> 
    {SponsorsData.map((items, index) =>{
        console.log(items.pic.src);
                return(
                   <div className={styles.sponsor_image_container}> 
                    <img key={index} src={items.pic.src} alt="xxx" className={styles.image}/>
                   </div>
                )
            })}
    </div>
    </div>
    </>
  )
}

export default index
