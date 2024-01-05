import { login } from "@/lib/actions";
import { signIn } from "@/lib/auth";
import styles from "./login.module.css"
const LoginPage = () => {

  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div className={styles.container}>    
         <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      <form action={login}>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>    
    
    
    </div>

  )
}

export default LoginPage