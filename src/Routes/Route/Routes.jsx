import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Error from "../../Error/Error";
import AllInstructor from "../../Pages/AllInstructor/AllInstructor";
import AllClass from "../../Pages/AllClass/AllClass";
import DashboardLayout from "../../Layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/instructors',
                element: <AllInstructor />
            },
            {
                path: '/classes',
                element: <AllClass />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        // children: [
        //   {
        //     path: 'add-room',
        //     element: <AddRoom />,
        //   }
        // ]
      }
]);

export default router;