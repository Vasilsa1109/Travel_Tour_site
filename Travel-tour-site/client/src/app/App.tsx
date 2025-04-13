import { useState, useEffect } from "react";
import { Header } from '@widgets/ui/Header/Header';
import { Outlet } from 'react-router-dom';
import "./App.css";

interface DataResponse {
  message: string;
}

export const App = ()  => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data: DataResponse) => setData(data.message));
  }, []);

  return (
    <>
    <Header />
    <main>
      <h1>Home</h1>
      <Outlet />
    </main>
    </>
  );
}