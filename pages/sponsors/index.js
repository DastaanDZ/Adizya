import { useState } from 'react'
import SponsorsData from '../../data/SponsorsData'

import styles from '../sponsors/sponsors.module.css'

const index = () => {
  return (
    <>
    <div className={styles.container}> 
         <div className={styles.title}> 
       <h1 className={styles.h1}>SPONSORS</h1>
       <hr className={styles.hr}/>
    </div>
    <div className={styles.image_container}> 
    {SponsorsData.map((items, index) =>{
        console.log(items.pic.src);
                return(
                    <img key={index} src={items.pic.src} alt="xxx" className={styles.image}/>
                )
            })}
    </div>
    </div>
    </>
  )
}

export default index
