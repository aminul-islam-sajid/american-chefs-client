import { createBrowserRouter } from "react-router-dom";
// import Main from "../components/Main"; // Import your Main component
import Home from "../components/home/Home";
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Home path
        element: <Home />,
      },
      {
        path: "recipe/:id", // No leading slash in child routes
        element: (
          <PrivetRoutes>
            <RecipeDetails />
          </PrivetRoutes>
        ),
      },
      {
        path: "login", // No leading slash in child routes
        element: <Login />,
      },
      {
        path: "registration", // No leading slash in child routes
        element: <Registration />,
      },
      {
        path: "about", // No leading slash in child routes
        element: <About />,
      },
      {
        path: "blog", // No leading slash in child routes
        element: <Blog />,
      },
    ],
  },
]);

export default router;
