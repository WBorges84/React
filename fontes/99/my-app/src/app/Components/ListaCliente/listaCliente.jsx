import React from "react";
import './listaCliente.css';
import { Link } from "react-router-dom";


function ListaClientes(props){

  function deleteUser(id){
    alert("Excluir usuario " + id);
  }

    return <table className="table table-hover table-bordered">
  <thead>
    <tr className="table-secondary">
      <th scope="col">Código</th>
      <th scope="col">Nome</th>
      <th scope="col">E-mail</th>
      <th scope="col">Telefone</th>
      <th scope="col" className="col-acao">Ações</th>
    </tr>
  </thead>
  <tbody>
    {
      props.arrayClientes.map((cliente) =>{
            return  <tr key={cliente.id}>
            <th scope="row">{cliente.id}</th>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.fone}</td>
            <td>
            <Link to="/app/editarCliente/{id}"><i className="fas fa-edit icone-acao"></i></Link>
            <Link to="#" onClick={() => deleteUser(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>

            </td>
          </tr>
        })

    }
   
  </tbody>
</table>
}

export default ListaClientes;