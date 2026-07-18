import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./router/MainLayout";
import Student from "./components/Ui/Student";
import AddStudent from "./components/Ui/AddStudent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div> 404 not Found</div>,
    children: [
      {
        index: true,
        element: <Student />,
      }, {
        path: "Add",
        element: <AddStudent />
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;