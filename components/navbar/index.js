import Link from 'next/link';

import icon from '../../assets/images/icon.png'
import logout from '@/lib/logout';
import Router, { useRouter } from 'next/router';

import styles from '../../components/navbar/navbar.module.css'

const Index = () => {

  const router = useRouter();

  return (
    <>
      <div className={styles.nav}>
            <Link href="/">
              <img src={icon.src} alt="xxx" className={styles.icon} />
            </Link>
            <div className={styles.home_login_container}>
              <Link href="/">
                <p className={styles.login}>Home</p>
              </Link>
              <p
                className={styles.login}
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
    </>
  )
}

export default Index
