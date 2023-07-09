import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/recipe/:id",
        element: <RecipeDetail />,
    },
]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes