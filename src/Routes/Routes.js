import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../layout/Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

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
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reviews",
        element: <ReviewDetails></ReviewDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <p>Path will not define</p>,
  },
]);
