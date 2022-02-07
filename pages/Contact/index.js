import Adizya from "./../../assets/Adizya";
import Linkden from "./../../assets/Linkden";
import Insta from "./../../assets/Insta";
import Map from '../../components/maps'

import styles from '../../pages/Contact/contact.module.css';

const contact = () => {
  return (
    <>
      <div className={styles.contact_main}>
        <div className={styles.map}>
        <Map/>
        </div>
        <div className={styles.content}>
        <div className={styles.title}> 
       <h1 className={styles.h1}>Contact Us</h1>
       <hr className={styles.hr}/>
       </div>
       <div className={styles.info}> 
          <tr>
            <th className={styles.address}>Address</th>
            <th>Phone</th>
            <th>Connect Us On</th>
          </tr>
          <tr>
            <td>Amet est tristique pulvinar senectus pharetra met mi, praesent pharetra enim. In aliquam mollis vitae lorem mattis mi aliquet.</td>
            <td>90909029 29302932039203</td>
            <td><Linkden/> <Insta/></td>
          </tr>
        </div>
      </div>
       </div>
    </>
  );
};

export default contact;



