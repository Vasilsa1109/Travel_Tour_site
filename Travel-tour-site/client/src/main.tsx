import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '@app/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '@shared/store';
import RegistrationPage from '@pages/registration/ui/RegistrationPage'
import { LoginPage } from '@pages/login/ui/LoginPage'
import { AboutPage } from '@pages/about/ui/AboutPage'
import { ErrorPage } from '@pages/ErrorPage/ErrorPage'
import { Contact } from '@pages/contact/Contact'
import { DestinationsPage } from '@pages/destinations/ui/DestinationsPage'
import { BlogPage } from '@pages/blog/ui/BlogPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);


