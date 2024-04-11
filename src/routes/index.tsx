import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExFormRouter from "@/routes/ExForm"
import ExViewModelRouter from "@/routes/ExViewModel"

const router = createBrowserRouter([
  ...ExFormRouter,
  ...ExViewModelRouter
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes