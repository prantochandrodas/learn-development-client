import Course from "../Components/Course/Course";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
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
                    return fetch('http://localhost:5000/category')
                },
                element:<Home></Home>
            }, 
            {
                path:'/courses',
                loader:()=>{
                    return fetch('http://localhost:5000/category')
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
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element:<Course></Course>
            }

        ],
        element:<Main></Main>
    }
]);