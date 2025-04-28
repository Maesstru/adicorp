import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectList from "./pages/Projects";
import Home from "./pages/Home";
import Project from "./pages/Project"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    { path: "/contact", element: <Contact /> },
    { path: "/portfolio", element: <ProjectList /> },
    { path: "/project/:id", element: <Project /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
