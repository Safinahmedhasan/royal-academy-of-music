import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'
import AddClass from '../layouts/DashboardLayout/AddClass'
import MyCart from '../Pages/DashBoard/MyCart/MyCart'
import AllUsers from '../Pages/AllUsers/AllUsers'
import AllClassCard from '../layouts/AllClassCard/AllClassCard'
import AdminInfo from '../Profile/AdminInfo'
import InstructorMyClass from '../layouts/InstructorMyClass/InstructorMyClass'
import UpdateClasses from '../layouts/UpdateClasses/UpdateClasses'
import AllPupolarClassSection from '../layouts/Popular/AllPupolarClassSection'
import AllPopularInstructorSection from '../layouts/Popular/AllPopularInstructorSection'
import ErrorPage from '../component/ErrorPage/ErrorPage'
import FeedBack from '../component/FeedBack/FeedBack'
import Payment from '../component/Payment/Payment'
import PaymentHistory from '../component/PaymentHistory/PaymentHistory'
import MyEnrolledClass from '../component/MyEnrolledClass/MyEnrolledClass'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/AllPopularClsses',
        element: <AllPupolarClassSection></AllPupolarClassSection>
      },
      {
        path: '/AllPopularInstructorSection',
        element: <AllPopularInstructorSection></AllPopularInstructorSection>
      },
    ],

  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/',
        element: <AdminInfo></AdminInfo>
      },
      {
        path: '/dashboard/add-room',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/myClasses',
        element: <MyCart></MyCart>
      },
      {
        path: '/dashboard/allStudent',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/allclass',
        element: <AllClassCard></AllClassCard>
      },
      {
        path: '/dashboard/InstructorMyClass',
        element: <InstructorMyClass></InstructorMyClass>
      },
      {
        path: '/dashboard/updateclasses/:id',
        element: <UpdateClasses></UpdateClasses>,
        loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`)
      },
      {
        path: '/dashboard/feedback/:id',
        element: <FeedBack></FeedBack>,
        loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`)
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`http://localhost:5000/carts/${params.id}`)
      },
      {
        path: '/dashboard/payment',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/myenroll',
        element: <MyEnrolledClass></MyEnrolledClass>
      }
    ]
  }
])
