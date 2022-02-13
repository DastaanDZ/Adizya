import styles from "./lec1.module.css";

import ignite from "../../assets/images/ignite.png";

const Lec2 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>IGNITE Thrissur <br></br> <p className={styles.subheading} >Ar. Senia CEPT Alumni And Abhilash O. S IIT Alumni</p>  </h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={ignite.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={ignite.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
          IGNITE is one of the prestigious institutions in Kerala which is continuously showing their class in the competitive fields of examinations like NATA, NID, JEE ARCH, UCEED, NIFT. They deliver a lot of talented and skillful students all over India throughout the generation. Their way of tutoring, observing  and carving the students to a better form is their exceptional quality that makes them different in the competitive field.
          </p>

          <h4 className={styles.desc_info}>
          19th February, 2022<br></br>
          4:00 pm - 6:00 pm



          </h4>

          <h4 className={styles.desc_info}>
          REG CLOSES ON<br></br>
18th February 5:00 pm IST


          </h4>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLSciOCDK0LdwJTCoEz7kacwwtnfOlhqfY1SXkj7PYE7niX-UCA/viewform`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Lec2;
