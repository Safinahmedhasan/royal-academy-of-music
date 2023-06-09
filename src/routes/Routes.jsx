import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import DashBoard from '../layouts/DashBoard/DashBoard'
import MyCart from '../Pages/DashBoard/MyCart/MyCart'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path: '/singUp',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      }
    ]
  }
])
