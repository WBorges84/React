import {React} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
 
/* PAGINAS*/ 
import Site from './Site/site';
import Home from './App/Home/home';

import CadCliente from './App/CadClientes/cadCliente';
import ListaCliente from './App/ListaCLiente/listaCliente';




function App(){


   return    <BrowserRouter>

      <Routes> 
         <Route exact path='/' element={<Site/>} />
         <Route exact path='/Home' element={<Home/>} />
         <Route exact path='/cadCliente' element={<CadCliente/>} />
         <Route exact path='/listaCliente' element={<ListaCliente/>} />
      </Routes>
 
      </BrowserRouter>
    
 }

export default App;