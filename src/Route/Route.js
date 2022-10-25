import Courses from "../Components/Courses/Courses";
import Main from "../Layouts.js/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        children:[
            {
                path:'/courses',
                element:<Courses></Courses>
            }
        ],
        element:<Main></Main>
    }
]);