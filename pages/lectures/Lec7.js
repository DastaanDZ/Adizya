import styles from '../lectures/lec1.module.css'

import lec3 from '../../assets/images/lec3.jpg'

const Lec1 = () => {
  return (
    <>
       <div>
       <div className={styles.title}> 
       <h1 className={styles.h1}>POST APOCALYPTIC, Post anthropocene</h1>
       <hr className={styles.hr}/>
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
        <p className={styles.desc}>Our world has witnessed unprecedented conditions, while secluding oneself in a closed space has allowed our minds to run freely with the possibilities of various horrific scenarios, and it is now time to express these freely and lighten our burden and visualize these in an alternate realm of metaverse.
        Problem statement : To reimagine a post-apocalyptic scenario

Entry Fees: Free

Guidelines:


    <ul>
      <li>●	This competition is open to all.</li>
      <li>●	Hand drawn sketches are only accepted for this event.</li>
      <li>●	Submission to be made in PDF, PNG , JPG or JPEG format.</li>
      <li>●	Participation is to be done individually only.</li>
      <li>●	The size of the submission file should be less than 10 mb.</li>
      <li>●	Registration for the competition is to be done adizya.org</li>
      <li>●	Submission is done on </li>
      <li>Marking is based on creativity, uniqueness, presentation skill, and the essence of Metaverse.</li>
      <li>The submission is done as JPEG, PNG, PDF format.</li>
      <li>Submission is done on </li>
    </ul>

    Judging criteria:

    <ul>
      <li>	Creativity</li>
      <li>	Quality of work</li>
    </ul>
</p>

<p className={styles.desc_info}>
Prizes Worth:<br></br>
1st Place -1k, 2nd Place - 500, 3rd Place - 200</p>

<p className={styles.desc_info}>
Contact<br></br>
Kavya        : +91 8078365963<br></br>
Keerthana : +91 9962817804<br></br>
</p>

<p className={styles.desc_info}>
DEADLINE DATE<br></br>
Registration Start :14-02-2022<br></br>
Registration End  : 18-02-2022<br></br>
Date : 19-02-2022<br></br>
Time :  8:00AM -  7:00 PM

</p>
       </div>
       <div className={styles.btn_container}> 
       <a href='https://forms.gle/uFYbCzppxRXz5FiC8' className={styles.register_btn}>REGISTER</a>
       </div>
       </div> 
    </>
  )
}

export default Lec1
