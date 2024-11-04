import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./assets/components/Root/Root";
import ErrorPage from "./assets/components/ErrorPage/ErrorPage";
import Home from "./assets/components/Home/Home";
import Dashboard from "./assets/components/Dashboard/Dashboard";
import BookDetail from "./assets/components/BookDetail/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
