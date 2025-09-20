import { HomePage } from "@/pages/home/ui";
import { HomeUser } from "@/pages/home/ui/home-user";
import { createBrowserRouter } from "react-router";
import { RouterProvider as BrowserRouteProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home/user",
    element: <HomeUser />,
  },
]);

export const RouterProvider = () => <BrowserRouteProvider router={router} />;
