import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/recipe/:id",
        element: <RecipeDetail />,
    },
]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes