import styles from "./lec1.module.css";

import eve2 from "../../assets/images/event2.jpg";

const Eve2 = () => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Junk Drawer </h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={eve2.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={eve2.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            An artist&apos;strue essence lies in his ability to create something
            out of nothing. If you are ready to test the limits of your artistic
            creativity, it is time to clean up your garage, find those unused
            items that are dusting on the corner, and create something
            magnificent that stretches your imagination to the limit by
            integrating your ideas into the digital world. Event Description:
            Design a piece of furniture with the given materials. Spatial
            Designing using one main material. Given materials: plastic bottles,
            pvc pipes, cans, sticks, thermocol. Guidelines:
            <ul>
              <li>
                A set of materials will be provided with which participants are
                required to design a furniture.
              </li>
              <li>
                The given materials can be deformed to your suitable
                requirements.
              </li>
              <li>File type - JPG, PNG, PDF.</li>
              <li>
                Submissions can be made using softwares or hand-drawn sketches.
              </li>
              <li>
                Submission shall be done through the google form provided.
              </li>
              <li>No registration fee required.</li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            Prizes Worth 1st Place -1000, 2nd Place - 600, 3rd Place - 400
            <br></br>
            The winner will also get a chance to sell their furniture to the
            sponsor company.
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Joel : +91 9539136147<br></br>
            Swathi : +91 8078011736<br></br>
          </p>

          <p className={styles.desc_info}>
            REGISTRATION CLOSES ON : 24-02-2022<br></br>
            SUBMISSION ENDS ON : 26-02-2022<br></br>
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href={`https://docs.google.com/forms/d/e/1FAIpQLSdRM_7A_VfRILVdhO31fF98P9pHVG-9uPhE66OZNfng6dzQmQ/viewform?usp=pp_url&entry.2059373958=${name}&entry.1878980868=${email}&entry.619268215=${inst}&entry.1044151569=${state}&entry.410368050=${phoneNo}&entry.1914638317=${adyziaId}`}
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};
export default Eve2;
