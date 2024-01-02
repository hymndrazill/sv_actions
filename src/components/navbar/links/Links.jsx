"use client"
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink";

const Links = () => {

  const [open,setOpen] = useState(false)

    const links = [
        {title: "Home" ,path : "/"},
        {title:"About",path : "/about"},
        {title:"Contact",path : "/contact"},
        {title:"Blog",path : "/blog"},
    ];
    
    // protected routes but statically tested
    const session = true;
    const isAdmin = true;

   
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={index} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Log Out</button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink  item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );

  

}

export default Links