import { useState } from "react";
import exhibitionData from "../../data/ExhibitionData";

import styles from "./../exhibition/exhibition.module.css";

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.h1}>EXHIBITION</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.image_container}>
          {exhibitionData.map((items, index) => {
            console.log(items.pic.src);
            return (
              <img
                key={index}
                src={items.pic.src}
                alt="xxx"
                className={styles.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
