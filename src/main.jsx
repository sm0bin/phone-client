import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Phones from "./Phones";
import App from "./App";
import Phone from "./Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:5000/phones")
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:5000/phone/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);