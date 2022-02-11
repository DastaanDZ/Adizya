import styles from "./lec1.module.css";

import lec3 from "../../assets/images/lec3.jpg";

const Lec1 = () => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Faux-paw-gleam</h1>
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
            Glow, baby, glow. From fireflies to glow worms, bioluminescence is
            ready to bright the future. We are trying to create a hybrid of the
            bioluminescent creatures and the wonders of the futuristic world in
            order to create a virtual companion. Problem statement : To create a
            faux pet with bioluminescence in the metaverse. Entry Fees: Free
            Guidelines:
            <ul>
              <li>● This competition is open to all.</li>
              <li>
                ● A visual representation of the pet to be provided with a
                character description{" "}
              </li>
              <li>
                ● Any 3d modeling software may be used as per convenience.
              </li>
              <li>● Hand drawn sketches are also accepted for submissions.</li>
              <li>● Submission to be made in PDF, PNG , JPG or JPEG format.</li>
              <li>● Participation is to be done individually only.</li>
              <li>
                ● The size of the submission file should be less than 10 mb.{" "}
              </li>
              <li>
                ● Registration for the competition is to be done adizya.org{" "}
              </li>
              <li>● Submission is done on </li>
            </ul>
            <ul>
              Judging criteria:
              <li>● Aesthetics of the pet</li>
              <li>● Creativity</li>
              <li>● Quality of work</li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            1st Place -1k, 2nd Place - 500, 3rd Place - 200
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Avas : +91 8943076247 <br></br>
            Abhiraj : +91 88070878<br></br>
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
            href="https://forms.gle/XudAry816f5mpgsc6"
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
