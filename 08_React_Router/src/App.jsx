import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Router/MainLayout'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Product from './Components/Product'
import ErrorPage from './Components/Error'


const App = () => {

  const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "service",
      element: <Service />
    },
    {
      path: "product",
      element: <Product />
    },
    ]
  }])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App