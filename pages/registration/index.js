import RegForm from '../../components/regform'

import styles from '../registration/registration.module.css'

const index = () => {
  return (
    <>
    <div className={styles.regform}>
    <div className={styles.container}> 
        <div className={styles.image_container}>
            <img src='/lec1.jpg' alt="xxx" className={styles.image}/>
        </div>
        <div className={styles.regform_container}> 
        <RegForm/>
        </div>
    </div>
    </div>
    </>
  )
}

export default index
