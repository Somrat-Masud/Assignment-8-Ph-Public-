import { createBrowserRouter } from "react-router-dom";
import Navber from "../Navber/Navber";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Detials from "../Pages/Detials/Detials";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRouter =  createBrowserRouter([
    {
        path:'/',
        element:<Navber></Navber>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/data.json')

            },
            {
                path:'/Donation',
                element:<Donation></Donation>,
                loader:() => fetch('/data.json')
            },
            {
                path:'/Statistics',
                element:<Statistics></Statistics>,
                loader:() => fetch('/data.json')
            },
            {
                path:'/details/:id',
                element:<Detials></Detials>,
                loader:() => fetch('/data.json')
             
            }
        ]
        
    }
])

export default myCreatedRouter;