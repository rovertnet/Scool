
//les routes de toutes les pages du site

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/solution",
    element: <Solution />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/faq",
    element: <Faq />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;