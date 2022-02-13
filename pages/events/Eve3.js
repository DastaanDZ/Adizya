import styles from "./lec1.module.css";

import eve3 from "../../assets/images/event3.jpg";

const Eve3 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
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
              <img src={eve3.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={eve3.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            Helmut Jahn once said that every building is a prototype and no two
            are alike. We invite you to test the limits and bounds of your
            creativity to design a unique yet interesting form. As interesting
            as it gets, there lies a hidden challenge within which will come to
            you on the way. Event Description: A Physical model of a building
            will be made centralized around a chosen material from a set of
            given materials. Given Materials:Cardboard Sheets, A4 sheets,
            Newspaper, Synthetic clay. Guidelines:
            <ul>
              <li>The model should not be less than 30 cm sq.</li>
              <li>The model should not be too small or too big. </li>
              <li>File type - JPG, PNG, PDF. (Not more than 5 MB)</li>
              <li>Editing of the pictures will lead to disqualification.</li>
              <li>Open to all.</li>
              <li>No registration fee</li>
              <li>
                Participants are free to choose their choice of building.{" "}
              </li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            Prizes Worth 1st Place -1000, 2nd Place - 600, 3rd Place - 400
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Aiswarya - +91 70254 67050, <br></br>
            Abhirami - +91 8301055342<br></br>
          </p>

          <p className={styles.desc_info}>
            Registration Closes on : 24-02-2022<br></br>
            Submission End on : 26-02-2022<br></br>
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLScrQ5RpdqNkYndQXDKrpIcDNKwMeCT_zT_6lRdK9Vkuz263WA/viewform?usp=pp_url&entry.2059373958=${name}&entry.1878980868=${email}&entry.619268215=${inst}&entry.1044151569=${state}&entry.410368050=${phoneNo}&entry.1914638317=${adyziaId}`}
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
