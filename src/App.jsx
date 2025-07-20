import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Browse from "./components/Browse"
import Login from "./components/Login"





function App() {
  

  const router = createBrowserRouter([
  { 
    path:'/',
    element:<Login/>
  },
  {
     path:'/browse',
    element:<Browse/>
    }
  ])


  return (
    <>
      
   <RouterProvider router={router}/>

    </>
  )
}

export default App
