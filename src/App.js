import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Home from "./components/Home";
import Login from "./components/Login";

const App = () => (
  <>
    <Provider store={appStore}>
      <Outlet />
    </Provider>
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    //   errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
