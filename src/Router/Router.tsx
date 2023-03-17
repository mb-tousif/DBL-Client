import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import MoneyTransfer from "../Pages/Dashboard/MoneyTransfer";
import Carriers from "../Pages/Carriers/Carriers";
import Page404 from "../Components/Page404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/> ,
        errorElement: <Page404/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/carriers',
                element: <Carriers/>
            },
            {
                path: '/signup',
                element: <Register/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        errorElement: <Page404/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/moneyTransfer',
                element: <MoneyTransfer/>
            },
        ]
    }
])

export default router;