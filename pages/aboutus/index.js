import Nav from '../../components/navbar'
import rise from '../../assets/images/RISE.png'

import styles from "./aboutus.module.css";

const Index = () => {
  return (
    <>
    <img src={rise.src} alt=""  className={styles.bg}/>
      <div>
       <Nav/>
      <div className={styles.title}> 
       <h1 className={styles.h1}>About Us</h1>
       <hr className={styles.hr} />
      </div>
          <p className={styles.desc}>
          A creative side to technology- letting out those crazy imaginations and forms in our minds.

Adizya, revolution del&apos;art, is an architectural extravaganza taking place during Tathva, the technical fest of NIT Calicut. 

Adizya brings to you an exclusive space to showcase your creativity and incline towards art and design, providing us with an opportunity to colour outside the lines and weave reality out of the imagination in our minds. Every year spectates the works of student architects and budding designers that engraves into our minds the image of a tranquil space of aptitude and ability. 

With every passing year Adizya continues to enchant us all with its magic and leave a long lasting impression in the minds of its audience.
<br></br>
<br></br>
Contact
<br></br>
<br></br>
Email: adizya@tathva.org<br></br>
Website : www.adizya.org<br></br>
Ph: 9744489606<br></br>
     : 83010 55342<br></br>
     : 89430 76247<br></br>
          </p>
        </div>
    </>
  );
};

export default Index;
