import styles from "./lec1.module.css";

import eve5 from "../../assets/images/event5.png";

const Eve5 = () => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Metafolio</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.info}>
          <div className={styles.pic_container}>
            <div className={styles.pic12_container}>
              <img src={eve5.src} alt="xxx" className={styles.pic1} />
            </div>
          </div>
          <p className={styles.desc}>
          In this fast paced world of advanced technology at fingertips, should architects stick to the traditional methods? We offer you a chance to showcase your creativity and enhance your portfolio while stepping into the alternate realm of the virtual worlds through Metafolio. Adizya’21 brings to you Metafolio Design Hackathon - a residence design competition, presented by Buildnext. 
            <ul>
              <li>●	This is a 3D modelling/designing event. Participants should create a 360 visualisation zip file using any software.</li>
              <li>
              ●	This event is open to architecture students of all years.
              </li>
              <li>
              ●	This is a submission event. participants should upload one 360 render zip file and one full hd render have to be submitted in google form at adizya.metafolio.in.
              </li>
              <li>●	At the time submission one has to mention the short description of the model and how effectively design strategies have been used.</li>
              <li>●	This is an individual event.</li>
              <li>●	Any software can be used to render and make a 360 visualisation zip file.</li>
              <li>●	Innovativeness is the major judging criteria.</li>
            </ul>
          </p>

          <p className={styles.desc_info}>
            Prizes Worth:<br></br>
            Jury choice awards: NFT rewards<br></br>
People's choice awards: NFT rewards<br></br>
internships / pre-placement interviews<br></br>
Participants: NFT certificates 

          </p>

          <p className={styles.desc_info}>
            Contact<br></br>
            Aavas - +91 8943076247<br></br>
            Keerthana - +91 9962817804<br></br>
          </p>
        </div>
        <div className={styles.btn_container}>
          <a
            href="https://adizya.metafolio.in/"
            className={styles.register_btn}
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  );
};

export default Eve5;
