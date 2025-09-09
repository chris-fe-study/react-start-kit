import { Main } from "@/pages/main";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
