import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//BLOCO DAS ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Produtos from './routes/Produtos/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Login from './routes/Login/Login.jsx';
import Erro404 from './routes/Erro404.jsx';
import Cadastro from './routes/Cadastro/Cadastro.jsx';
//BLOCO DAS ROTAS

const router = createBrowserRouter([
  {path:"/",element: <App/>,errorElement:<Erro404/>,
   children:[
    {path:"/", element:<Home/>},
    {path:"/produtos",element:<Produtos/>},
    {path:"/editar/produtos/:id",element:<EditarProdutos/>},
    {path:"/login",element:<Login/>},
    {path:"/cadastrar",element:<Cadastro/>},
   ] 
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>
  
)
