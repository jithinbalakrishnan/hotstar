import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Home from "./components/Home";
import Login from "./components/Login";
import HomeV2 from "./components/HomeUseCall";
import HomeV3 from "./components/HomeRef";
import TimerTick from "./components/TimerTick";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Slider from "./components/Slider/Slider";
import WarningLayout from "./components/warningLayout";


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
        path: "use-callback",
        element: <HomeV2 />,
      },
      {
        path: "use-ref",
        element: <HomeV3 />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/timer-tick",
        element: <TimerTick />,
      },
      {
        path: "/progress",
        element: <ProgressBar />
      },
      {
        path: "/slider",
        element: <Slider />
      },
      {
        path: "/warning",
        element: <WarningLayout />
      }
    ],
    //   errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
