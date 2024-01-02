import Image from "next/image"
import styles from "./about.module.css"
const ContactPage = () => {
  return (
    <div className={styles.container}>

        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Us</h2>
          <h1  className={styles.title}>We Make ides real</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Corporis totam voluptate repudiandae, magnam molestias itaque!</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className={styles.boxes}>

            <div className={styles.box}>
            <h1>5k+</h1>
            <p>Year of experience</p>          
            </div>
            
            <div className={styles.box}>
            <h1>5k+</h1>
            <p>Year of experience</p>          
            </div>

            <div className={styles.box}>
            <h1>5k+</h1>
            <p>Year of experience</p>          
            </div>

          </div>
        
        </div>

        <div className={styles.imgContainer}>
          <Image src="/about.png" fill alt="" className={styles.img} />
        </div>

    </div>
  )
}

export default ContactPage