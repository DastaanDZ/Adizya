import Adizya from "./../../assets/Adizya";

import styles from '../../pages/Contact/contact.module.css';

const contact = () => {
  return (
    <>
      <div className={styles.contact_main}>
        <div className={styles.image}>
          <Adizya />
        </div>
        <div className={styles.content}>
        <div className={styles.title}> 
       <h1 className={styles.h1}>Contact Us</h1>
       <hr className={styles.hr}/>
       </div>
       <div className={styles.info}> 
          <tr>
            <th>Address</th>
            <th>Phone</th>
            <th>Connect Us On</th>
          </tr>
          <tr>
            <td>Nec, magna id sed mattis nibh</td>
            <td>90909029 29302932039203</td>
            <td></td>
          </tr>
        </div>
      </div>
       </div>
    </>
  );
};

export default contact;



