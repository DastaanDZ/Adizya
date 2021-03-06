import styles from "./lec1.module.css";

import eve1 from "../../assets/images/event1.jpg";

const Eve1 = ({ name, email, inst, state, phoneNo, adyziaId }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Revamp</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={eve1.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={eve1.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
          In the journey to find a future in the digital world without limitations and bounds, we should not leave our past behind. As Marcus Garvey rightly said, people without the knowledge of their past are like trees without roots. Here we are trying to revamp our pasts to merge with the future without forgetting our roots.

<br></br>
<br></br>
Event Description: 
To redesign a given historic building such that it can be placed in the metaverse in a unique manner that exploits your creativity. 
<br></br>
<br></br>
Guidelines:

            <ul>
              <li>
                Participation can be done individually or in a team of 2
                members.
              </li>
              <li>
              A historic building will be provided onto which changes can be implemented_”Colosseum”
              </li>
              <li>Changes may be done on the facade, or the building as a whole. </li>
              <li>Submission can be done in either hard or soft copy</li>
              <li>This is open for all students.</li>
              <li>
              No registration fee required.
              </li>
              <li>The submission is done as JPEG, PNG, PDF format.</li>
              <li>Submission shall be done through the google form provided.</li>
            </ul>
          </p>

          <h4 className={styles.desc_info}>
            Prizes Worth 1st Place -1000, 2nd Place - 600, 3rd Place - 400
          </h4>

          <h4 className={styles.desc_info}>
            Contact<br></br>
            Jithin A.J - +91 97444 89606, <br></br>
            Vaisakh - +91 89430 76247<br></br>
          </h4>

          <p className={styles.desc_info}>
            REGISTRATION CLOSES ON : 24-02-2022<br></br>
            SUBMISSION ENDS ON : 26-02-2022<br></br>
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLSe6ydujI2-10iIrfQHFYBuXYIIa0zo9JSq5qLlZPEFF680ajg/viewform?usp=pp_url&entry.2059373958=${name}&entry.1878980868=${email}&entry.619268215=${inst}&entry.1044151569=${state}&entry.410368050=${phoneNo}&entry.1914638317=${adyziaId}`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Eve1;
