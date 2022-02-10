import styles from '../lectures/lec1.module.css'

import lec3 from '../../assets/images/lec3.jpg'

const Lec1 = () => {
  return (
    <>
       <div>
       <div className={styles.title}> 
       <h1 className={styles.h1}>Revamp</h1>
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
        <p className={styles.desc}>Event Description: Participants will be given a series of questions which need to be answered with relevant pictures. The participant with the most number of relevant pictures will be declared the winner.
Guidelines:


    <ul>
      <li>●	The picture should be taken by the participant only</li>
      <li>●	The picture should not be taken from an external source like Google/Pinterest.</li>
      <li>●	Each question will have a time limit of 15 - 20 minutes, within which the answer needs to be submitted. </li>
    </ul>
</p>

<p className={styles.desc_info}>
Prizes Worth:<br></br>
1st Place -1k, 2nd Place - 500, 3rd Place - 200</p>

<p className={styles.desc_info}>
Contact<br></br>
Jithin A.J - +91 97444 89606, <br></br>
Vaisakh   - +91 89430 76247<br></br>
</p>
       </div>
       <div className={styles.btn_container}> 
       <a href='#' className={styles.register_btn}>REGISTER</a>
       </div>
       </div> 
    </>
  )
}

export default Lec1
