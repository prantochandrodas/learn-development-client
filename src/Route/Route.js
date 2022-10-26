import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Main from "../Layouts.js/Main";

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
                element:<Courses></Courses>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Registration></Registration>
            }

        ],
        element:<Main></Main>
    }
]);