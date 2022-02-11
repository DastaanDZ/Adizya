import Adizya from "./../../assets/Adizya";
import Linkden from "./../../assets/Linkden";
import Insta from "./../../assets/Insta";
import Nav from '../../components/navbar'
import Map from '../../components/maps'

import styles from '../../pages/Contact/contact.module.css';

const Index = () => {
  return (
    <>
      <div className={styles.contact_main}>
      <Nav/>
      <div className={styles.map_contact_container}> 
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
          <tr className={styles.tr}>
            <td>adizya@tathva.org</td>
            <td>9744489606<br></br>83010 55342<br></br> 89430 76247</td>
            <td><Linkden/> <Insta/></td>
          </tr>
        </div>
      </div>
      </div>
       </div>
    </>
  );
};

export default Index;



