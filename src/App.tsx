import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './Paginas/home/Home'
import Login from './Paginas/login/Login';
import CadastroUsuario from './Paginas/cadastrousuario/CadastroUsuario';
import './componentes/temas/listatemas/ListaTemas'
import './componentes/postagens/listapostagens/ListaPostagens'
import './App.css';
import ListaTemas from './componentes/temas/listatemas/ListaTemas';
import ListaPostagens from './componentes/postagens/listapostagens/ListaPostagens';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{minHeight: '100vh'}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrar' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTemas />} />
          <Route path='/postagens' element={<ListaPostagens />} />
        </Routes>
      </div>


      <Footer />
    </Router >
  );
}
export default App
