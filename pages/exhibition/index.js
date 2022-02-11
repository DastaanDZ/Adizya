import { useState } from "react";
import Link from "next/link";

import exhibitionData from "../../data/ExhibitionData";
import icon from '../../assets/images/icon.png'
import Nav from '../../components/navbar'

import styles from "./../exhibition/exhibition.module.css";

const Index = () => {

  return (
    <>
      <div className={styles.container}>
      <Nav/>
        <div className={styles.title}>
          <h1 className={styles.h1}>EXHIBITION</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.image_container}>
          {exhibitionData.map((items, index) => {
            console.log(items.pic.src);
            return (
              <div key={index} className={styles.each_img_container}> 
              <img
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

export default Index;
