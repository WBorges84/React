import React from 'react';

function Precos(){
    return <section id="precos">
        <div className="container">
            <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Comece sua avaliação gratuita. Não é necessário cartão de crédito.</p>
                </div>            
            </div>
            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Free</h1></div>
                        <div className="card-budy">
                            <h2>R$ 0,00</h2>
                            <p>Até 50 clientes</p>
                            <p>Sem Suporte</p>
                            <button className="btn btn-lg btn-outline-primary">Começar agora</button>
                            
                        </div>
                        <br></br>                      
                        
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Pro</h1></div>
                        <div className="card-budy">
                            <h2>R$ 49,90</h2>
                            <p>Até 200 clientes</p>
                            <p>Suporte por email</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar agora</button>
                            
                        </div>
                        <br></br>                      
                        
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Premium</h1></div>
                        <div className="card-budy">
                            <h2>R$ 99,90</h2>
                            <p>Clientes ilimitados</p>
                            <p>Suporte por telefone</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar agora</button>
                            
                        </div> 
                        <br></br>                     
                        
                    </div>
                </div>
            </div>
            
            <br></br><br></br> 
                
               


        </div>
       </section>;
    
}

export default Precos;