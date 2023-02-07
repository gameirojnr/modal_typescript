import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import ModalProvider from "./Context/ModalProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = lazy(() => import("./pages/App"));
const LongPage = lazy(() => import("./pages/LongPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/longPage",
    element: <LongPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div></div>}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
