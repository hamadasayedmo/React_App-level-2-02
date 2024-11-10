import React from "react";

// use Context
import { useContext } from "react";
import ThemeProvider from "./context/ContextData";

// Start Routing Code
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Js from "./pages/javascript";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Js />,
  },
]);
// End Routing Code

const App = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
