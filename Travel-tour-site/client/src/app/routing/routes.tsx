import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { HomePage } from "@pages/HomePage/HomePage";
import { LoginPage } from "@pages/login/ui/LoginPage";
import { RegistrationForm } from "@features/auth/RegistrationForm";
import { ErrorPage } from "@pages/ErrorPage/ErrorPage";
import { AboutPage } from "@pages/about/ui/AboutPage";
import { Contact } from "@pages/contact/Contact";
import { DestinationsPage } from "@pages/destinations/ui/DestinationsPage";
import { BlogPage } from "@pages/blog/ui/BlogPage";
import { ToursPage } from "@pages/tours/ui/ToursPage";
import { ProtectedRoute } from "./protected_routes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />, // Обёртка для защищённых маршрутов
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          // можно добавить ещё защищённые маршруты
        ],
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <RegistrationForm />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "destinations",
        element: <DestinationsPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "tours",
        element: <ToursPage />,
      },
      {
        path: "*",
        element: <ErrorPage />, //страница 404
      },
    ],
  },
]);