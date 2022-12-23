import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom'; 

function NavBar(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">
    <div className="container-fluid">    
        

        <a className="navbar-brand" href="#">
        <img src="/Images/logo.png" alt="" height="28" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to= "/app/Home" className="nav-link" aria-current="page" href="#banner">Home</Link>
            </li>
            <li className="nav-item">
            <Link to= "/app/novocliente" className="nav-link" aria-current="page" href="#banner">Novo Cliente</Link>
            </li>
            <li className="nav-item">
            <Link to= "/app" className="nav-link" aria-current="page" href="#banner">Sair</Link>
            </li>
        </ul>
            
    </div>
  </div>
  </nav>
}

export default NavBar;