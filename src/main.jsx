import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./assets/components/Root/Root";
import ErrorPage from "./assets/components/ErrorPage/ErrorPage";
import Home from "./assets/components/Home/Home";
import Dashboard from "./assets/components/Dashboard/Dashboard";
import BookDetail from "./assets/components/BookDetail/BookDetail";
import ListedBook from "./assets/components/ListedBook/ListedBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        loader: () => fetch("/booksData.json"), // do not load all the books for one book.
      },
      {
        path: "listedBooks",
        element: <ListedBook></ListedBook>,
        // worst wav to load some data
        loader: () => fetch("/booksData.json"), // do not all data for some
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
    <ToastContainer />
  </StrictMode>
);
