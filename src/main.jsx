import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Error from "./pages/Error/Error.jsx";
import Home from "./pages/Home/Home.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil/:id",
        element: <Perfil />,
      },
      ,
      {
        path: "/cadastro",
        element: <Cadastro />,
      }
    ],
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement: <Error />

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
