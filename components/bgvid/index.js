import { useEffect, useRef } from 'react';
import styles from '../bgvid/bgvid.module.css'

const Index = () => {

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);

  return (
    <>
    <div className={styles.cover}> 
      <video  ref={videoRef}
            width="250"
            loop
            muted
            autoPlay={'autoplay'}
            preload='auto'
            className={styles.video}>         
      <source src="./bg.mp4" type="video/mp4"/>     
</video>
    </div>
    </>
  )
}

export default Index
