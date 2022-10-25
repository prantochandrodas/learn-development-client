import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Main from "../Layouts.js/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            }
        ],
        element:<Main></Main>
    }
]);