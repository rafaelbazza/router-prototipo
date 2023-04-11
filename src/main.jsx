import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*1-configurando router

createBrowserRouter-Constante de objetos que organiza os routers

RouterProvider- Componente que substitui o app no main, que recebe a constante com createBrowserRouter na 
propriedade router



*/ 

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ErrorPage from './pages/Error'
import ContactDetails from './pages/ContactDetails'


/*const router = createBrowserRouter([

 {
  path:"/",
  element: <Home/>,
 } ,
 {
  path:"Contatc",
  element:<Contact/>,
 }





  
]);*/

const router = createBrowserRouter([

  {
   path:"/",
   element: <App/>,
   //pagina de erro
   errorElement:<ErrorPage/>,
   children:[
    {
      path:"/",
      element:<Home/>,
  
    },
    {path:"Contact",
    element:<Contact/>  
  },
  {
    path:"/contact/:id",
    element:<ContactDetails/>,
  },
  //navigate hook para redirecionar de uma pagina que nao existe mais para outra que existe 
  {
    path:"/oldcontact",
    element:<Navigate to="/contact"/>
  }
   ]
  } ,

 
 
 
   
 ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
