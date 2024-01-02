import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Hymndrazill</div>
      <div className={styles.text}>
        Hymndrazill creative thoughts agency © all rights reserved
      </div>
    </div>
  );
}

export default Footer