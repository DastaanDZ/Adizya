import Link from 'next/link'
import contact from '../../assets/images/contact.png'

import styles from '../../components/footer/footer.module.css'

const Index = () => {
  return (
    <>
        <div className={styles.team_contact}>
        <p className={styles.team}>Team</p>
        <Link href='/Contact'> 
        <img src={contact.src} alt="Contact"  className={styles.contact}/>
        </Link>
        </div>

    </>
  )
}

export default Index
