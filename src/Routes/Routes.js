import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../layout/Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Services from "../Services/Services";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import UpdateReview from "../UpdateReview/UpdateReview";
import AddService from "../AddService/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
          fetch(`https://meta-tube-server.vercel.app/services/${params.id}`),
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
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`https://meta-tube-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/service/add",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <p>Path will not define</p>,
  },
]);
