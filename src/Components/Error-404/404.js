import React from 'react'
import './404.scss'
// import Logo from 'https:/logini.blogs.es/6f44dd/google-2015-1/450_1000.jpg';
import Cookies from 'universal-cookie';


function error404()
{
    let cookies = new Cookies()
    const manageChange = () =>
    {
        if(cookies.get("user_token") === undefined || cookies.get("user_token") === null )
        {
            window.location.href = "/CAS/"
        }
        else{
            window.location.href = "/CAS/dashboard"
        }
    }

    return(
        
        <main className="container">
            <img className="logo404" src='https://i.ibb.co/CtDcQ1v/tplogomini.png'/>

            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">4</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <span className="particle">0</span>
            <article className="content">
                <p>Lo sentimos :(</p>
                <p>Te perdiste en la galaxia <strong>404</strong>.</p>
                <p>
                <a  onClick = {() => manageChange()}><button >Volver</button></a>
                </p>
            </article>
            </main>

    )
    
}
export default error404;