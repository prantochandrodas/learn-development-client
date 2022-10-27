import { FaQq } from "react-icons/fa";
import Blogs from "../Components/Blogs/Blogs";
import Course from "../Components/Course/Course";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import PremiumPost from "../Components/PremiumPost/PremiumPost";
import Registration from "../Components/Registration/Registration";
import Main from "../Layouts.js/Main";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        children:[
            {
                path:'/',
                loader:()=>{
                    return fetch('https://learn-development-server.vercel.app/category')
                },
                element:<Home></Home>
            }, 
            {
                path:'/courses',
                loader:()=>{
                    return fetch('https://learn-development-server.vercel.app/category')
                },
                element:<Courses></Courses>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Registration></Registration>
            },
            {
                path:'/category/:id',
                loader:({params})=>{
                    return fetch(`https://learn-development-server.vercel.app/category/${params.id}`)
                },
                element:<Course></Course>
            },
            {
                path:'/post/:id',
                loader:({params})=>{
                    return fetch(`https://learn-development-server.vercel.app/post/${params.id}`)
                },
                element:<PrivetRoute><PremiumPost></PremiumPost></PrivetRoute>
            },
        {
            path:'blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'faq',
            element:<Faq></Faq>,
        }

        ],
        element:<Main></Main>
    }
]);