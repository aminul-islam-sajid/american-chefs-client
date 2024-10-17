

import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/home/Home";
import HomePage from "../components/home/HomePage";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import RecipeDetails from "../Recipe/RecipeDetails";
import PrivetRoutes from "./Privet/PrivetRoutes";
import About from "../About/About";
import ErrorPage from "../components/error/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>
    

  },
  // {
  //   path: "/",
  //   element: <HomePage />
  // },
 


  {
    path: "/recipe/:id",
    element: <PrivetRoutes><RecipeDetails /></PrivetRoutes>
   

  },




  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: '/about',
    element: <About></About>
  },
  {
    path: "/blog",
    element: <Blog />,
  },
],
);

export default router;
