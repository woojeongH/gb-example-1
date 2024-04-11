import ExFormPage from "@views/ExFormPage"
import { routerPaths } from "@/constants";


const router = [
  {
    path: "/",
    element: <ExFormPage />,
  },
  {
    path: routerPaths.formPage,
    element: <ExFormPage />,
  }
]
export default router;