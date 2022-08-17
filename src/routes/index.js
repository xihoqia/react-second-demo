import { Navigate } from "react-router-dom";

import Login from "../pages/Login";

import Layout from "../pages/Layout";

import Welcome from "../pages/welcome";
import List from "../pages/List";
import Admin from "../pages/Admin";

const newArr = [
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "admin",
        element: <Admin/>,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Navigate to="/Login" /> },
];

export default newArr;
