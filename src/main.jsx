import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home.jsx'
import OurStory from "./OurStory.jsx";
import TheDetails from "./TheDetails.jsx";
import RSVP from "./RSVP.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/our-story",
    element: <OurStory/>,
  },
  {
    path: "/details",
    element: <TheDetails/>,
  },
  {
    path: "/rsvp",
    element: <RSVP/>,
  }

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);