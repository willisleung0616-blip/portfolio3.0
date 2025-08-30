import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutMe } from "./screens/aboutme";
import { PhoneHomePage } from "./screens/phonehomepage";
import { PhoneProject } from "./screens/phoneproject";
import { PhoneProjectScreen } from "./screens/phoneprojectscreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AboutMe />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  {
    path: "/phone-project-1",
    element: <PhoneProject />,
  },
  {
    path: "/phone-home-page",
    element: <PhoneHomePage />,
  },
  {
    path: "/phone-project-2",
    element: <PhoneProjectScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
