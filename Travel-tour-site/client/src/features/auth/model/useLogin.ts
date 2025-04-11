import { useState } from "react";
import { LoginFormValues } from "../model/types";

export function useLogin() {
  const [loading, setLoading] = useState(false); 
// state - для хранения состояния компонента, проверка завершена ли загрузка
// useState(false) - значение по умолчанию loading = false 
  const login = async ({ username, password }: LoginFormValues) => {
    setLoading(true); // начало загрузки при нажатии на login
    await new Promise((r) => setTimeout(r, 1000)); // 1000 мс ждём, когда передадутся все данные
    console.log("Logged in:", { username, password });
    setLoading(false); // загрузка завершена
  };

  return { login, loading }; // возвращаем значение, чтобы использовать в других компонентах
}
// функция, отвечает за login, вызывающаяся на OnSubmit (кастомный хук)
