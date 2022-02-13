import styles from "./lec1.module.css";

import eve6 from "../../assets/images/event6.jpg";

const Eve6 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Resonate</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={eve6.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={eve6.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            Ever wondered what the music of the spheres would sound like? Are
            you a person interested in the voices of the universe? Then this is
            an event that is curated for people just like you , sharpen your
            senses and get ready to exploit it. Brace yourself for this roller
            coaster ride that will test the limit of your thinking and
            imagination. 
            <br></br>
            <br></br>
            Event Description: Visualize the space from the given
            audio description and bring it to life. 
            <br></br>
            <br></br>
            Guidelines:
            <ul>
              <li>
                This event will be conducted live on google meet where the
                participants are required to text the message in the chat box in
                the respective platform.
              </li>
              <li>
                Participation can be done individually or in a group of 2.
              </li>
              <li>Total number of questions to be answered is 20. </li>
              <li>Time given for each answer will be 20 seconds. </li>
              <li>First person to answer will get the point.</li>
              <li>Multiple answers will not be counted. </li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Judging Criteria : The participant with the most points wins.{" "}
            <br></br>
            Prizes Worth:<br></br>
            Prizes Worth 1st Place -1000, 2nd Place - 600, 3rd Place - 400
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Kavya    - +91 8078365963<br></br>
            Gladwin - +91 82818 30428
          </p>

          <p className={styles.desc_info}>
            <p className={styles.desc_info}>
              Registration Closes on : 24-02-2022<br></br>
              Event Date : 26-02-2022<br></br>
            </p>
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLSfh7TcPnz1z8lH0R9yHNCQJPoUCS5Z5wG9M2KLWTkWoxD4o0A/viewform?usp=pp_url&entry.2059373958=${name}&entry.1878980868=${email}&entry.619268215=${inst}&entry.1044151569=${state}&entry.410368050=${phoneNo}&entry.1914638317=${adyziaId}`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Eve6;
