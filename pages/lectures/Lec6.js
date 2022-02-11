import styles from '../lectures/lec1.module.css'

import lec3 from '../../assets/images/lec3.jpg'

const Lec1 = () => {
  return (
    <>
       <div>
       <div className={styles.title}> 
       <h1 className={styles.h1}>Resonate</h1>
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
        <p className={styles.desc}>Ever wondered what the music of the spheres would sound like? Are
you a person interested in the voices of the universe? Then this is an
event that is curated for people just like you , sharpen your senses and
get ready to exploit it. Brace yourself for this roller coaster ride that will
test the limit of your thinking and imagination.

Event Description: Visualize the space from the given audio description and bring it to life.

Guidelines:


    <ul>
      <li>●	This event will be conducted live on google meet where the participants are required to text the message in the chat box in the respective platform.</li>
      <li>●	Participation can be done individually or in a group of 2.</li>
      <li>●	Total number of questions to be answered is 20. </li>
      <li>●	Time given for each answer will be 20 seconds. </li>
      <li>●	First person to answer will get the point.</li>
      <li>●	Multiple answers will not be counted. </li>
      <li>●	Participants need to turn on the video during the event.</li>
      <li>●	Registration for the competition is to be done adizya.org</li>
      <li>●	Submission is done on</li>
    </ul>
</p>


<p className={styles.desc_info}>
Judging Criteria :
The participant with the most points wins. <br></br>
Prizes Worth:<br></br>
1st Place -1k, 2nd Place - 500, 3rd Place - 200</p>

<p className={styles.desc_info}>
Contact<br></br>
Gladwin :+91 8281830428 <br></br>
Balaji     :+91 7780793864<br></br>
Mahanth:+91 9515169394<br></br>
</p>

<p className={styles.desc_info}>
COORDINATORS<br></br>
Vaisakh<br></br>
Misfer<br></br>
</p>

<p className={styles.desc_info}>
DEADLINE DATE<br></br>
Registration Start :10-02-2022 (tentatively)<br></br>
Registration End  : 16-02-2022<br></br>
Submission Date  : 20-02-2022<br></br>
Result: 28-02-2022
</p>
       </div>
       <div className={styles.btn_container}> 
       <a href='https://forms.gle/2eFSKxiCTDQXkruG7' className={styles.register_btn}>REGISTER</a>
       </div>
       </div> 
    </>
  )
}

export default Lec1
