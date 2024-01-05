import { signIn } from "@/lib/auth";

const LoginPage = () => {

  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div>
        <form action={handleGithubLogin}>
        </form>
      <button>Login Github</button>
    </div>
  )
}

export default LoginPage