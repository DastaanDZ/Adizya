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
          <h1>Contact Us</h1>
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
    </>
  );
};

export default contact;



