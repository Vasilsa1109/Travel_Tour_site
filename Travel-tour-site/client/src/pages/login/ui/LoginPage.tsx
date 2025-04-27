import { LoginForm } from "@shared/ui/LoginForm";
import './LoginPage.css'
export const LoginPage = () => {
  return (
    <div className="login__block">
      <div className="login__form">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};
