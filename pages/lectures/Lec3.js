import styles from "./lec1.module.css";

import vimuri from "../../assets/images/VEMURI.png";

const Lec3 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Vamsi Krishna Vemuri</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={vimuri.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={vimuri.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            Vamsi Vemuri Krishna, co-founder of Futurly- a global education
            platform, is a speculative architect, educator and researcher based
            in Germany. His expertise lies in transforming ideas into new
            dimensions of unrealized spaces in architecture and design across
            multiple mediums. He specializes in creating interactive fictions
            and spatial mediations in the virtual and augmented reality realms.
            Join us on this talk, if you wish to understand the booming
            sensation of NFT and the metaverse that has been raging all over the
            internet in this interactive session that is sure to leave your
            mind-blown. Adizya presents to you an exclusive lecture on
            “Metaverse and Architecture” by Mariana Cabugueira.
          </p>

          <h4 className={styles.desc_info}>
            20 th February, 2022<br></br>
            1:00 pm - 2:00 pm IST
          </h4>

          <h4 className={styles.desc_info}>
            REG CLOSES ON<br></br>
            19th February 5:00 pm IST
          </h4>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLScdwvtm60JV4zsgJ99jaeA3afzfSJovXaQerQDZNfN0r5uo3w/viewform?usp=pp_url&entry.1299407733=${name}&entry.1485796384=${email}&entry.995903093=${inst}&entry.541297553=${state}&entry.1310340881=${phoneNo}&entry.1885035817=${adyziaId}
`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Lec3;
