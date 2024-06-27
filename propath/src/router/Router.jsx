import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";

//jobprovider
import JPCompnaySetup1 from "../pages/jobprovider/CompanySetup/CompanyInfo";

import JpHome from "../pages/jobprovider/dashboard/Home";
import JpDashboard from "../pages/jobprovider/dashboard/Dashboard";
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";
import JpMyJobs from "../pages/jobprovider/dashboard/MyJob";
import JpPlansAndBilling from "../pages/jobprovider/dashboard/PlanAndBilling";
import JpMeetUp from "../pages/jobprovider/dashboard/MeetUp";
import JpSettings from "../pages/jobprovider/dashboard/Settings"

//jobseeker
import JobSeekerHome from "../pages/jobseeker/JobSeekerHome";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgetPassword"; 
import Signup from "../pages/Auth/Signup";
import PasswordReset from "../pages/Auth/PasswordReset";
import EmailVerification from "../pages/Auth/EmailVerification";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "resetpassword",
          element: <PasswordReset />,
        },
        {
          path: "emailverification",
          element: <EmailVerification />,
        },
      ]
    },
    {
      path: "/Jobprovider",
      element: <JPCompnaySetup1/>,
      children: [
        {
          path:"Setup",
          element:<JPCompnaySetup1/>
        }
      ]
    },
    {
      path: "/jobprovider",
      element: <DashboardLayout user="jobprovider"/>,
      children: [
        {
          path:"/jobprovider",
          element: <Navigate to="/jobprovider/home/" replace />
        },
        {
           path:"home",
           element:<JpHome/>
           
        },
        {
          path:"dashboard",
          element:<JpDashboard/>
        },
        {
          path:"post-a-job",
          element:<JpPostAJob/>
        },
        {
          path:"my-jobs",
          element:<JpMyJobs/>
        },
        {
          path:"plans-and-billing",
          element:<JpPlansAndBilling/>
        },
        {
          path:"meet-up",
          element:<JpMeetUp/>
        },
        {
          path:"settings",
          element:<JpSettings/>
        }

      ]
    },

    

      {
        path: "/jobseeker",
        element: <DashboardLayout user="jobseeker"/>,
        children: [

          {
            path:"/jobseeker",
            element: <Navigate to="/jobseeker/home/" replace />
          },

          {
            path:"home",
            element:<JobSeekerHome/>
          },

          // {
          //   path:"applied-jobs",
          //   element:<JsAppliedJobs/>
          // },
          
        ]
      }

    
   
]);

export default router