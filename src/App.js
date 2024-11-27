import React from "react";

// use Context
import { useContext } from "react";
import ThemeProvider from "./context/ContextData";

// Start Routing Code
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

import Profile from "./pages/profile";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
