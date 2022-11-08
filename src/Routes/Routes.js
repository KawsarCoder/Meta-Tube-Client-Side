import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      // {
      //   path: "/courses",
      //   element: <Course></Course>,
      // },
    ],
  },
  {
    path: "*",
    element: <p>Path will not define</p>,
  },
]);
