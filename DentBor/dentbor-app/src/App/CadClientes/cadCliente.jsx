import React from "react";
import { Link } from "react-router-dom";
import MenuApp from "../Menu/menu-app";
import './cadClientes.css';

function CadCliente(){
return<div>
    <h2>Cadastro de Clientes</h2>
    
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <div>
    <form className="row g-3 form-config">
    <div class="row g-3">
  <div class="col-md-6">
  <label for="inputnome" className="form-label">Nome</label>
    <input type="text" class="form-control" aria-label="Primeiro nome"/>
  </div>
  <div class="col-md-6">
  <label for="inputsobrenome" className="form-label">Sobrenome</label>
    <input type="text" class="form-control" aria-label="Sobrenome"/>
  </div>
</div>      
  <div className="col-md-6">
    <label for="inputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail"/>
  </div>
  <div className="col-md-3">
    <label for="inputCPF" className="form-label">CPF/CNPJ</label>
    <input type="CPF" className="form-control" id="inputCPF"/>
  </div>
  <div className="col-md-3">
    <label for="inputCPF" className="form-label">Telefone</label>
    <input type="CPF" className="form-control" id="inputCPF" placeholder="21 970002611"/>
  </div>
  <div className="col-md-2">
    <label for="inputCEP" className="form-label">CEP</label>
    <input type="text" className="form-control" id="inputCEP"/>
  </div>
  <div className="col-md-6">
    <label for="inputEndereco" className="form-label">Endereço</label>
    <input type="text" className="form-control" id="inputEndereco" placeholder="Rua Dita cuja...."/>
  </div>
  <div className="col-md-4">
    <label for="inputBairro" className="form-label">Bairro</label>
    <input type="text" className="form-control" id="inputBairro" placeholder="Bairro do joão"/>
  </div>
  <div className="col-md-1">
    <label for="inputNumero" className="form-label">Número</label>
    <input type="text" className="form-control" id="inputNumero" placeholder="Nº"/>
  </div>
  <div className="col-md-4">
    <label for="inputCidade" className="form-label">Cidade</label>
    <input type="text" className="form-control" id="inputCidade"/>
  </div>
  <div className="col-md-2">
    <label for="inputState" className="form-label">Estado</label>
    <select id="inputState" className="form-select">
      <option selected>UF...</option>    
      <option id="AP">Amapá (AP)</option>
      <option id="AM">Amazonas (AM)</option>
      <option id="BA">Bahia (BA)</option>
      <option id="CE">Ceará (CE)</option>
      <option id="DF">Distrito Federal (DF)</option>
      <option id="ES">Espírito Santo (ES)</option>
      <option id="GO">Goiás (GO)</option>
      <option id="MA">Maranhão (MA)</option>
      <option id="MT">Mato Grosso (MT)</option>
      <option id="MS">Mato Grosso do Sul (MS)</option>
      <option id="MG">Minas Gerais (MG)</option>
      <option id="PA">Pará (PA)</option>
      <option id="PB">Paraíba (PB)</option>
      <option id="PR">Paraná (PR)</option>
      <option id="PE">Pernambuco (PE)</option>
      <option id="PI">Piauí (PI)</option>
      <option id="RJ">Rio de Janeiro (RJ)</option>
      <option id="RN">Rio Grande do Norte (RN)</option>
      <option id="RS">Rio Grande do Sul (RS)</option>
      <option id="RO">Rondônia (RO)</option>
      <option id="RR">Roraima (RR)</option>
      <option id="SC">Santa Catarina (SC)</option>
      <option id="SP">São Paulo (SP)</option>
      <option id="SE">Sergipe (SE)</option>
      <option id="TO">Tocantins (TO)</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12 btn-center">
    <Link to="#" className="btn btn-success btn-lg btn-banner">Cadastrar</Link>
    <Link to="/listaCliente" className="btn btn-danger btn-lg btn-banner">Cancelar</Link>
  </div>
</form>

    </div>
</div>

}

export default CadCliente;