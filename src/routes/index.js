import { Navigate } from "react-router-dom";

import Login from '../pages/Login';

import Layout from "../pages/Layout";

const newArr=[
    {path:'/layout',element:<Layout/> },
    {path:'/login',element:< Login/> },
    {path:'/', element:<Navigate to='/Login'/>}
]

export default  newArr