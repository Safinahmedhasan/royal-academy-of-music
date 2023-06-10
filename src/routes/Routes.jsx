import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'
import AddClass from '../layouts/DashboardLayout/AddClass'


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
        path: '/dashboard/add-room',
        element: <AddClass></AddClass>
      }
    ]
  }
])
