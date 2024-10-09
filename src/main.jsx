import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Soils from "./routes/Soils";
import Distrebuter from "./routes/Distrebuter";
import Crops from "./routes/Crops";
import About from "./routes/About";
import Home from './routes/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Soils",
        element: <Soils />,
      },
      {
        path: "/Distrebuter",
        element: <Distrebuter />,
      },
      {
        path: "/Crops",
        element: <Crops />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <LogIn />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
