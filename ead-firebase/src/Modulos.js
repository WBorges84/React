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

export default function Modulos(props){
    const [modulos, setModulos] = useState([]);

    const { nomeCurso } = useParams();


    useEffect(() => {
        

        
        
        db.collection("cursos").where("slug", "==", nomeCurso).get()
            .then(querySnapshot => {
                querySnapshot.docs[0].ref.collection('modulos').onSnapshot(querySnapshot2 => {
                    setModulos(querySnapshot2.docs);
                });
            })
            
        
    }, [])


    return(
        <div className="cursos">
            <h2>Módulos Disponíveis:</h2>
            
            {
                modulos?.map(function(val){
                    let url = `/${nomeCurso}/${val.data().slug}`
                    return (
                        
                        <div className="curso-single">
                       
                        <p><AiFillVideoCamera /> <Link to={url}>{val.data().titulo}</Link></p>
                        <p>Descrição: {val.data().descricao}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}