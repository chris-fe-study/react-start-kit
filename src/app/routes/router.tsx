import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider as BrowserRouteProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const RouterProvider = () => <BrowserRouteProvider router={router} />;
