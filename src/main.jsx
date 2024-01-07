import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./features/store";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Project from "./components/Project.jsx";
import AddProject from "./components/AddProject.jsx";
import DeleteProject from "./components/DeleteProject.jsx";
import NoMatch from "./components/NoMatch.jsx";
import UpdateProject from "./components/UpdateProject.jsx";
import Home from "./components/Home.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />{" "}
      {/* Render Home component at root path */}
      <Route path="login" element={<Login />} />
      <Route
        path="register"
        element={<Register />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="project/"
        element={
          <PrivateRoute>
            <Project />
          </PrivateRoute>
        }
        errorElement={<ErrorBoundary />}
      >
        <Route
          path=":id"
          element={<ProjectDetails />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
      <Route
        path="add"
        element={<AddProject />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="delete"
        element={<DeleteProject />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="update"
        element={<UpdateProject />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
);

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
}
