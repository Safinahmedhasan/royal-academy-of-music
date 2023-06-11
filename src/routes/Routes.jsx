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
      }, {
        path: '/singUp',
        element: <SignUp></SignUp>
      }
    ],
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
      }
    ]
  }
])
