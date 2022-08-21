import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Welcome from "../pages/welcome";
import List from "../pages/List";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound/NotFound";
import {AuthRoute} from '../components/AuthRoute'

const newArr = [
  {
    path: "/layout",
    element: <AuthRoute><Layout /></AuthRoute> ,
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
  {
    path: '*',
    element: <NotFound />,
  },
  { path: "/", element: <Navigate to="/Login" /> },
];

export default newArr;
