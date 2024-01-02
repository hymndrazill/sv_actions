import Image from "next/image"
import styles from "./contact.module.css"
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill  />  
      </div>       
      
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>

          <input type="text" placeholder="Name & Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="phone Number (Opt)" />
          <textarea name=""placeholder="Message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      
      </div> 

    </div>
  )
}

export default ContactPage