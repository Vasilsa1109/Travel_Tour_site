import { useState, useEffect } from "react";
import { Header } from '@widgets/ui/Header/Header';
import { Outlet } from 'react-router-dom';
import "./App.css";
import { HomePage } from "@pages/HomePage/HomePage";
import { Footer } from "@widgets/ui/Footer/Footer";

interface DataResponse {
  message: string;
}

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <HomePage />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
