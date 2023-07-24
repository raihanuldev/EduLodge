import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Main/Main.jsx'
import Home from './Pages/Home/Home.jsx'
import ErrorPage from './Components/Error/ErrorPage'
import Login from './Pages/Login/Login'
import SingUp from './Pages/SingUp/SingUp'
import AuthProvider from './Provider/AuthProvider'
import Profile from './Pages/Profile/Profile'
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword'
import EditProfile from './Pages/Profile/EditProfile'
import Collages from './Pages/Collages/Collages'
import Admission from './Pages/Admission/Admission'
import MyCollages from './Pages/MyCollages/MyCollages'
import CollageDetails from './Pages/CollageDetails/CollageDetails'
import Apply from './Pages/Admission/Apply/Apply'
import ResearchDetails from './Pages/Home/Research/ResearchDetails/ResearchDetails'
import PrivateRoute from './Provider/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/research-paper/:id',
        element:<ResearchDetails></ResearchDetails>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SingUp></SingUp>
      },
      {
        path:'/forget-password',
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/edit-profile',
        element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
      },
      {
        path:'/collages',
        element: <Collages></Collages>
      },
      {
        path:'/collages/:id',
        element:<PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>
      },
      {
        path:"/admission",
        element:<Admission></Admission>
      },
      {
        path:'/collage-admission/:id',
        element: <Apply></Apply>
      },
      {
        path:"/my-collages",
        element: <PrivateRoute><MyCollages></MyCollages></PrivateRoute>
      }

    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
