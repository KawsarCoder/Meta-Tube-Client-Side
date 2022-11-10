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
        element: (
          <PrivateRoute>
            {" "}
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
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
          fetch(`http://localhost:5000/reviews/${params.id}`),
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
