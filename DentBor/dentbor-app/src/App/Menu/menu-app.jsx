import React from 'react';
import { Link } from 'react-router-dom';
import './menu-app.css';

function MenuApp(){
    return <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid colore">
      <a className="navbar-brand"  href="#">DentBor</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cadastros
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item colorA" to="/listaCliente" aria-current="page">Clientes</Link></li>
              <li><a className="dropdown-item" href="#">Produtos</a></li>
              <li><a className="dropdown-item" href="#">Dentistas</a></li>
              <li><a className="dropdown-item" href="#">Perfis</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Agenda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Prótese</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Caixa</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Financeiro
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Recebimentos</a></li>
              <li><a className="dropdown-item" href="#">Pagamentos</a></li>
              <li><a className="dropdown-item" href="#">Relatórios</a></li> 
                      
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Supervisão
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Usuários</a></li>
              <li><a className="dropdown-item" href="#">Parâmetros</a></li>
              <li><a className="dropdown-item" href="#">Perfis</a></li>              
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  }

export default MenuApp;