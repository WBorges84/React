import React, {useState, useEffect}from 'react';
import {Link, Redirect}  from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import './editarCliente.css';
import firebase from '../Config/firebase';
import 'firebase/firestore';

function EditarCliente(props){

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[fone, setFone] = useState('');
  const[sucesso, setSucesso] = useState('N');
  const[mensagem, setMensagem] = useState(''); 
  const db = firebase.firestore();

useEffect(() =>{
        firebase.firestore().collection('clientes').doc(props.match.params.id).get().then((resiltado) => {
            
        })

},[] )


  function cadastrarCliente(){
if (nome.length === 0) {
  setMensagem('Insira um nome.');
    
}else if (email.length === 0) {
  setMensagem('Insira um E-mail');
}else if (fone.length ===0) {
  setMensagem('Insira um telefone');
  
}

    db.collection('clientes').add({
      nome: nome,
      email: email,
      fone: fone
    }).then(() =>{
      setMensagem('');
      setSucesso('S');
    }).catch((erro) => {
      setMensagem(erro.message);
      setSucesso('N');
    })
  }

    return <div>
      <Navbar/>
      <div className="container-fluid titulo">
        
        <div className="offset-lg-3 col-lg-6">  
          <form>
            <h1>Novo cliente</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
              <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
              <input onChange={(e) => setFone(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="text-center">
              <Link to="/app/home" className="btn btn-outline-primary btn-acao">Cancelar</Link>
              <button onClick={cadastrarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>
            </div>
        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
        {sucesso === 'S' ? <Redirect to='/app/home'/> : null}

          </form>
        </div>  
      </div>  
    </div>;  
  }

export default EditarCliente;