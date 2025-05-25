
import { useEffect } from 'react';
import { Header } from "@widgets/ui/Header/Header";
import { Outlet } from 'react-router-dom';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';
import "./App.css";
import '../index.css';
import { AppWrapper } from '@features/AppWrapper';
import { HomePage } from '@pages/HomePage/HomePage';
import { Footer } from '@widgets/ui/Footer/Footer';
export const App = ()  => {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);


  return (
    <>
        <AppWrapper>
        <Header />
        <main>
          <HomePage />
          <Outlet />
        </main>
        <Footer />
      </AppWrapper>
    </>
  );
}
// interface DataResponse {
//   message: string;
// }