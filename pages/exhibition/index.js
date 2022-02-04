import { useState } from "react";
import exhibitionData from "../../data/ExhibitionData";

import icon from '../../assets/images/icon.png'

import styles from "./../exhibition/exhibition.module.css";
import Link from "next/link";

const index = () => {

  return (
    <>
      <div className={styles.container}>
      <Link href='/'> 
      <img src={icon.src} alt="xxx" className={styles.icon} />
      </Link>
        <div className={styles.title}>
          <h1 className={styles.h1}>EXHIBITION</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.image_container}>
          {exhibitionData.map((items, index) => {
            console.log(items.pic.src);
            return (
              <div className={styles.each_img_container}> 
              <img
                key={index}
                src={items.pic.src}
                alt="xxx"
                className={styles.image}
              />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
