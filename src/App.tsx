import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './Paginas/home/Home'
import Login from './Paginas/login/Login';
import CadastroUsuario from './Paginas/cadastrousuario/CadastroUsuario';
import './componentes/temas/listatemas/ListaTemas'
import './componentes/postagens/listapostagens/ListaPostagem'
import './App.css';
import ListaTemas from './componentes/temas/listatemas/ListaTemas';
import ListaPostagens from './componentes/postagens/listapostagens/ListaPostagem';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import DeletarPostagem from './componentes/postagens/deletarpost/DeletarPostagem';
import CadastroPostagem from './componentes/postagens/cadastropost/CadastroPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrar' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTemas />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>


      <Footer />
    </Router >
  );
}
export default App
