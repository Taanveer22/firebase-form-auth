import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default MyRouter;
