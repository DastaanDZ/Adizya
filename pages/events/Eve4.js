import styles from "./lec1.module.css";

import eve4 from "../../assets/images/event4.jpg";

const Eve4 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Riddle me this</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={eve4.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={eve4.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            “Tick tick tick… time is running out detective, time waits for no
            man and I wait for no batman”. Remember this iconic line riddler
            says to the dark knight every now and then? Well, we are here to
            give you quite the adrenaline rush that this iconic rivalry has
            given us over the years. Presenting you “Riddle me this”, an
            exciting and intriguing quiz with amazing prizes and lots of fun
            presented to you by ADIZYA in collaboration with ENQUIRE QUIZ CLUB
            NITC.
            <ul>
              <li>The event is open to all </li>
              <li>Each participant has to register in the provided platform</li>
              <li>Only one person per team</li>
              <li>No registration fee</li>
              <li>The event would comprise of 11 questions where each question has to be answered along with its image</li>
              <li>The first 10 riddles would lead up to the mega riddle question in the end.</li>
              <li>
                The event would comprise of 11 questions where each question has
                to be answered along with its image
              </li>
              <li>
                he first 10 riddles would lead up to the mega riddle question in
                the end.
              </li>
              <li>
                The platform for the event would be on a Discord server and the
                link would be sent after the registration.
              </li>
              <li>The event would be hosted on 20th of February.</li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            1st Prize: 3000/-<br></br>
            2nd Prize: 2500/-<br></br>
            3rd Prize: 2000/-<br></br>
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Vaisakh - +91 89430 76247<br></br>
            Vishal - +91 83742 45391
            <br></br>
          </p>

          <p className={styles.desc_info}>
            REGISTRATION CLOSES ON : 19-02-2022<br></br>
            EVENT DATE : 20-02-2022
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLScO_VfAs0tszumC1TpDcEjzSoQkmfs5oda1Wqd7UuvyW5g5Qw/viewform?usp=pp_url&entry.2059373958=${name}&entry.1878980868=${email}&entry.619268215=${inst}&entry.1044151569=${state}&entry.410368050=${phoneNo}&entry.1914638317=${adyziaId}`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Eve4;
