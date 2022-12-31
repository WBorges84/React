import React from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './listaCliente.css';




function ListaCliente(){
    return <div>
        <h2>Lista de Clientes</h2>
        
        <Link to="/Home" type="button" class="btn btn-primary btn-sm btn-voltar">Voltar</Link>

        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <Link to='#' className="btn-delete"><DeleteOutlineIcon/></Link> 
                    <Link to='/cadCliente' className="btn-editar"><BorderColorIcon/></Link>  
                    </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                    <Link to='#' className="btn-delete"><DeleteOutlineIcon/></Link> 
                    <Link to='/cadCliente' className="btn-editar"><BorderColorIcon/></Link>  
                    </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>larry@larry</td>
                <td>@twitter</td>
                    <td>
                    <Link to='#' className="btn-delete"><DeleteOutlineIcon/></Link> 
                    <Link to='/cadCliente' className="btn-editar"><BorderColorIcon/></Link>  
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
}

export default ListaCliente;