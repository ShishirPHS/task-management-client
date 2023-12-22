import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AllTasks from "../pages/Dashboard/AllTasks/AllTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "allTasks",
        element: <AllTasks></AllTasks>,
      },
    ],
  },
]);

export default router;
