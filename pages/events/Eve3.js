import styles from "./lec1.module.css";

import lec3 from "../../assets/images/lec3.jpg";

const Eve3 = () => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Monometria</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={lec3.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={lec3.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            Helmut Jahn once said that every building is a prototype and no two
            are alike. We invite you to test the limits and bounds of your
            creativity to design a unique yet interesting form. As interesting
            as it gets, there lies a hidden challenge within which will come to
            you on the way. Event Description: A Physical model of a building
            will be made centralized around a chosen material from a set of
            given materials. Guidelines:
            <ul>
              <li>The model should not be less than 30 cm sq.</li>
              <li>The model should not be too small or too big. </li>
              <li>File type - JPG, PNG, PDF. (Not more than 5 MB)</li>
              <li>Editing of the pictures will lead to disqualification.</li>
              <li>Open to all.</li>
              <li>Registration for the competition is to be done adizya.org</li>
              <li>Submission is done on </li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            1st Place -1k, 2nd Place - 500, 3rd Place - 200
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Aiswarya - +91 70254 67050, <br></br>
            Abhirami - +91 8301055342<br></br>
          </p>

          <p className={styles.desc_info}>
            DEADLINE DATE<br></br>
            Registration Start :10-02-2022 (tentatively)<br></br>
            Registration End : 16-02-2022<br></br>
            Submission Date : 20-02-2022<br></br>
            Result: 28-02-2022
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href="https://forms.gle/MuKNwVGSBpstit4p7"
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Eve3;
