import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Button";
import { useLogin } from "@features/auth/model/useLogin";
import { LoginFormValues } from "@features/auth/model/types";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();  // handleSubmit - функция-обработчик 
  const { login, loading } = useLogin();

  const onSubmit = async (data: LoginFormValues) => {
    await login(data);  // асинхронная функция, чтобы получить все данных, для отправления на сервер
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="Username"
        {...register("username")}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};
