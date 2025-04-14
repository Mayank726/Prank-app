import { useState } from 'react'
import './App.css'
import FirstPage from '../src/components/FirstPage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
        <div>
          <FirstPage />
        </div>
    },
    {
      path: '/check',
      element: <SecondPage />
        
    },
    {
      path: '/result',
      element: <ThirdPage />
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
