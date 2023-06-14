import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Error from "../../Error/Error";
import AllInstructor from "../../Pages/AllInstructor/AllInstructor";
import AllClass from "../../Pages/AllClass/AllClass";
import DashboardLayout from "../../Layouts/DashboardLayout";
import AddClass from "../../Pages/Dashboard/AddClass";
import AllUsers from "../../Pages/Dashboard/ForAdmin/AllUsers";
import MyClass from "../../Pages/Dashboard/ForStudent/MyClass";
import AddClassForm from "../../Pages/Dashboard/Forms/AddClassForm";
import UpdateClass from "../../Pages/Dashboard/Forms/updateClass";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ManageClasses from "../../Pages/Dashboard/ForAdmin/ManageClasses";
import AdminHome from "../../Pages/Dashboard/ForAdmin/AdminHome";
import StudentHome from "../../Pages/Dashboard/ForStudent/StudentHome";
import InstructorHome from "../../Pages/Dashboard/Instructor/InstructorHome";
import SentFeedback from "../../Pages/Dashboard/ForAdmin/SentFeedback";
import Payment from "../../Pages/Dashboard/ForStudent/Payment";
import EnrolledClasses from "../../Pages/Dashboard/ForStudent/EnrolledClasses";

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
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: 'addClass',
                element: <AddClass />,
            },
            {
                path: 'allUsers',
                element: <AllUsers />
            },
            {
                path: 'myClass',
                element: <MyClass />
            },
            {
                path: 'addClass',
                element: <AddClassForm />,
            },
            {
                path: 'updateClass',
                element: <UpdateClass />
            },
            {
                path: 'manageClasses',
                element: <ManageClasses />
            },
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'studentHome',
                element: <StudentHome />
            },
            {
                path: 'instructorHome',
                element: <InstructorHome />
            },
            {
                path: 'sentFeedback/:id',
                element: <SentFeedback />
            },
            {
                path: 'payment/:id',
                element: <Payment />
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses />
            }
        ]
    },
]);

export default router;