import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.tsx";
import Home from "./components/Home.tsx";
import Signup from "./components/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
