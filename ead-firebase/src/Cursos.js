import {useState, useEffect} from 'react';
import {db} from './firebase.js';
import {AiFillVideoCamera} from 'react-icons/ai';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function Cursos(){
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        db.collection('cursos').onSnapshot((snap)=>{
            setCursos(snap.docs);
        })
    }, [])


    return(
        <div className="cursos">
            <h2>Cursos Disponíveis:</h2>
            {
                cursos?.map(function(val){
                    return (
                        <div className="curso-single">
                        <p><AiFillVideoCamera /> <Link to={"/"+val.data().slug}>{val.id}</Link></p>
                        <p>Descrição: {val.data().descricao}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}