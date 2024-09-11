import React from 'react'
import { BrowserRouter,createBrowserRouter,Route,RouterProvider,Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'
import Login from '../Pages/Login/Login'
import UserProtected from './UserProtected'
import Category from '../Pages/Category/Category'
import CategoryItems from '../Pages/CategoryItem/CategoryItems'
import ItemPage from '../Pages/ItemPage/ItemPage'
import Admin from '../Pages/Admin/Admin'
import Adminprotected from './Adminprotected'
import NoUrl from '../404/NoUrl'



const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
              path:'cateogry',
              children:[
                {
                  index:true,
                  element:<Category/>
                },
                {
                  path:':catedoryId',
                  children:[
                   {
                    index:true,
                    element:<CategoryItems/>
                   },
                   {
                    path:':itemId',
                    element:<ItemPage/>
                   }

                  ]
                }
               
              ]
            },
            {
                element:<UserProtected/>,
                children:[
                    {
                    path:'profile',
                    element:<Profile/>
                }
            ]
            },
            
          
        ]
    },
    {
      path:'*',
      element:<NoUrl/>
    },
    {
        path:'/login',
        element:<Login/>
    },
  
   { element:<Adminprotected/>,
    children:[
      {
        path:'/admin',
        element:<Admin/>
      }
    ]
   }
])


const AppRouter = () => {
  return (<>
   {/* Method 1(old version) */}
   


{/* Method 2(new version) */}
<RouterProvider router={router}/>
</>
  )
}

export default AppRouter
