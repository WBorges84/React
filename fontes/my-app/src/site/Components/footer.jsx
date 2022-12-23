import React from "react";

function Footer(){
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/willian-borges-60b7b068/" target="blank"> <i className="fa fa-facebook fa-2x"></i></a> </li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/willian-borges-60b7b068/" target="blank"> <i className="fa fa-twitter fa-2x"></i></a> </li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/willian-borges-60b7b068/" target="blank"> <i className="fa fa-intagram fa-2x"></i></a> </li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/willian-borges-60b7b068/" target="blank"><i className="fa fa-envelope fa-2x"></i></a> </li>
            </ul>
        </div>
        <a href="mailto:willian.borges@hotmail.com.br">willian.borges@hotmail.com.br</a>
        <p>Desenvolvido por Borges SA - {ano}</p>

    </section>
}

export default Footer;