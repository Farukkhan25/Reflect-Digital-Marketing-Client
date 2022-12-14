import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import AddService from "../../Pages/AddService/AddService";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditReview from "../../Pages/MyReviews/EditReview";
import Review from "../../Components/Review/Review";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allServices",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://server-alpha-lake.vercel.app/details/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview/edit/:id",
        element: <EditReview></EditReview>,
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
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
