import styles from "./lec1.module.css";

import lec3 from "../../assets/images/lec3.jpg";

const Lec2 = () => {
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
              <img src={lec3.src} alt="xxx" className={styles.pic1} />
            </div>
            <div className={styles.pic12_container}>
              <img src={lec3.src} alt="xxx" className={styles.pic2} />
            </div>
          </div>
          <p className={styles.desc}>
            An artist&apos;s true essence lies in his ability to create
            something out of nothing. If you are ready to test the limits of
            your artistic creativity, it is time to clean up your garage, find
            those unused items that are dusting on the corner, and create
            something magnificent that stretches your imagination to the limit
            by integrating your ideas into the digital world. Event Description:
            Design a piece of furniture with the materials p Spacial Designing
            using one main material to provide stability to the structures one
            can add materials like steel, Guidelines:
            <ul>
              <li>
                A set of materials will be provided with which participants are
                required to design a furniture. Materials like PVC pipes, bottle
                and its cap,{" "}
              </li>
              <li>
                The given materials can be deformed to your suitable
                requirements.
              </li>
              <li>File type - JPG, PNG, PDF. (Not more than 10 MB)</li>
              <li>
                Submissions can be made using softwares or hand-drawn sketches.
              </li>
              <li>
                Submission & Registration for the competition is to be done
                adizya.org
              </li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            1st Place -1k, 2nd Place - 500, 3rd Place - 200<br></br>
            The winner will also get a chance to sell their furniture to the
            sponsor company.
          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Joel : +91 9539136147<br></br>
            Swathi : +91 8078011736<br></br>
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
            href="https://forms.gle/CHkNXiWDoeWHiG9v9"
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
