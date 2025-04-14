import { useState, useEffect } from "react";
import { Header } from '@widgets/ui/Header/Header';
import { Outlet } from 'react-router-dom';
import "./App.css";

interface DataResponse {
  message: string;
}

export const App = () => {
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
        <div className="main_block">
          <h1>TOUR & TRAVEL</h1>
          <img src="https://revelo.vercel.app/assets/images/hero/hero.jpg" alt="" id="hero" />
        </div>
        <h3>Discover the World's Treasures with Ravelo <br />
          One site <button>34,500 </button>most popular experience you’ll remember</h3>

        <Outlet />
      </main>
    </>
  );
}