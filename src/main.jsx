import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Back from "./Components/Back/Back";
import Home from "./Components/Home/Home";
// import HomeNavbar from "./assets/HomeNavbar/HomeNavbar";

import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import Booksdata from "./Components/Books/Booksdata";
import DetailsInformation from "./Components/DetailsData/DetailsInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Back />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bookshop",
        element: <Booksdata />,
      },
      {
        path: "home",
        element: <HomeNavbar />,
      },
      {
        path: "books/:isbn13",
        element: <DetailsInformation />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.isbn13}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
