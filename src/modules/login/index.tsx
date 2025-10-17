import Logo from "../../shared/components/logo";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid w-full max-w-sm gap-6">
        <Logo />

        <h1>Conecte-se</h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
