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

export default function Aulas(props){
    const [aulas,setAulas] = useState([]);

    const { nomeCurso,nomeModulo } = useParams();


    useEffect(() => {
        

        
        db.collection("cursos").where("slug", "==", nomeCurso).get()
        .then(querySnapshot => {
                querySnapshot.docs[0].ref.collection('modulos').where("slug", "==", nomeModulo).get()
                .then(querySnapshot2=>{
                    querySnapshot2.docs[0].ref.collection('aulas').get()
                    .then(querySnapshot3=>{
                     
                        querySnapshot3.docs.map(function(val){
                            
                            setAulas(aulas => aulas.concat({data:val.data(),aberto:false}))
                        });
                    })
                })
            });
            
            
        

    }, [])

    function logicaVideo(e,i){
        e.preventDefault();
        
        aulas.map(function(val,i2){
            let aberto = false;
            if(i2 == i){
                if(aulas[i2].aberto == false){
                aberto = true;
                const old = aulas[i2];
                const updated = { ...old, aberto: aberto }
                const clone = [...aulas];
                clone[i2] = updated;
                setAulas(clone);
                }else{
                aberto = false;
                const old = aulas[i2];
                const updated = { ...old, aberto: aberto }
                const clone = [...aulas];
                clone[i2] = updated;
                setAulas(clone);
                }
            }



        })
    }




    return(
        <div className="cursos">
            <h2>Aulas Disponíveis:</h2>
            
            {
                aulas?.map(function(val,i){

                    if(val.aberto == false){
                    
                    return (
                        
                        <div className="curso-single">
                       
                        <p><AiFillVideoCamera /> {val.data.titulo}</p>
                        <p><a onClick={(e)=>logicaVideo(e,i)} href="#">Assistir Aula!</a></p>
                        </div>
                    )
                    }else{
                        return (
                        
                            <div className="curso-single">
                           <p><a onClick={(e)=>logicaVideo(e,i)} href="#">fechar video</a></p>
                            <p><AiFillVideoCamera /> {val.data.titulo}</p>
                           
                            <video width="100%" autoplay controls controlsList="nodownload">
                                    <source src={val.data.url_video} type="video/mp4"/>
                                    
                                    Your browser does not support the video tag.
                            </video>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}