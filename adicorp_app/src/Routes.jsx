// App.js or Root.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import ProjectList from "./pages/Projects";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Layout from "./pages/Base"; // Import the Layout component

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />, // Use Layout as a wrapper for all routes
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/portfolio",
          element: <ProjectList />,
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
      ],
    },
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
