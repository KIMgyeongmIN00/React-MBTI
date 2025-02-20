import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRouter from "./ProtectedRouter";
import Test from "../pages/home/Test";
import Result from "../pages/home/Result";
import SiteLayout from "../components/layouts/SiteLayout";
import Board from "../pages/Board";
import Stats from "../pages/Stats";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SiteLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/board",
          element: <Board />,
        },
        {
          path: "",
          element: <ProtectedRouter />,
          children: [
            {
              path: "/mbti",
              element: <Test />,
            },
            {
              path: "/result",
              element: <Result />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/stats",
              element: <Stats />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
