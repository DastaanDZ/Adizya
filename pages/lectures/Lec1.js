import styles from "./lec1.module.css";

import mc from "../../assets/images/mc.png";

const Lec1 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Mariana Cabugueira</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={mc.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={mc.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
          Mariana Cabugueira is an Architect and Urban Designer from Portugal, recently working at Zaha Hadid Architects and teaching at the Architectural Association in London. Her research interests gravitate around generative design, parametric design, digital design, iterative design, and the evolution of technology through robotic fabrication. Adizya presents to you an exclusive lecture on “The practice of Digital Fluidity in Architecture” by Mariana Cabugueira.
          </p>

          <h4 className={styles.desc_info}>
          19th February, 2022<br></br>
4:30 pm - 5:30 pm IST (11:00 am - 12:00 am GMT)

          </h4>

          <h4 className={styles.desc_info}>
          REG CLOSES ON<br></br>
18th February 5:00 pm IST


          </h4>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLScNHR_weelZj_HjBmV63TLG_DWe200cdLHFKrXlt2qBDUA2lg/viewform`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Lec1;
