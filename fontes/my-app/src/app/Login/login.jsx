import React, {useState} from 'react';
import './login.css';  
import { Link } from 'react-router-dom';

import firebase from '../Config/Firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-auth-compat';
import { fireEvent } from '@testing-library/react';
function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function LoginUsuario(){
     //firebase.

    }

    function alterarEmail(event){
        setEmail(event.target.value);

    }

    function alterarSenha(event){
        setSenha(event.target.value);

    }
    return <div className="d-flex aling-items-center text-center form-container">
      <form className="form-signin">
            <img className="mb-4" src="Images/logo-small2.png" alt=""/>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
            <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
            <label for="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
            <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
            </div>
            <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>
            <div className="login-links mt-5">
                <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha.</Link>
                <Link to="/app/novaconta" className="mx-3">Criar uma conta.</Link>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido Por Borges SA</p>
        </form>
    </div>;
}

export default Login;