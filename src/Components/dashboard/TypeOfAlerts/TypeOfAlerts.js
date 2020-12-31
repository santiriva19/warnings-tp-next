import React from 'react';
import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsb } from '@fortawesome/free-brands-svg-icons'
import { 
    faMobile,
    faBook,
    faTintSlash,
    faPencilAlt,
    faInfoCircle,
    faLeaf,
    faLaptop,
    faSuitcaseRolling
} from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie'


class AlertsPopUp extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            showMenu: false
        }

        this.menuShowToggle = this.menuShowToggle.bind(this);
    }

    menuShowToggle = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

    // labelArray : ["Bolso",'Botella','Lapicero','Computador', 'Celular', 'Libro o cuaderno','USB'],

    render () {
        return (
            <div >
                <div style ={styles.body}> 
                    <div style ={styles.header}>
                        <FontAwesomeIcon 
                            icon = {faInfoCircle} size="4x" color="#8F2A92"
                            style = {{width : '100%'}}
                        />
                        <h2 style={{color: '#575757', textAlign: 'center'}}>Tipo de alertas...</h2>
                    </div>        
                    <div style ={styles.container}>
                        <FontAwesomeIcon icon={faMobile} size="3x" color="#8F2A92" />
                        <div className="conteneLetrasAndHr">
                            <p style = {{marginRight : '76%'}} >Celular</p>
                            <hr />
                        </div>
                        
                    </div>
                    <div style ={styles.container} >
                        <FontAwesomeIcon icon={faBook} size="2x" color="#8F2A92" />
                        <div className="conteneLetrasAndHr">
                            <p style = {{marginRight : '82%'}}>Libro</p>
                            <hr />
                        </div>
                        
                    </div>
                    <div style ={styles.container} >
                        <FontAwesomeIcon icon={faTintSlash} size="2x" color="#8F2A92"/>
                        <div  style = {{paddingLeft : '7%'}} className="conteneLetrasAndHr">
                            <p style = {{marginRight : '75%'}} >Botella</p>
                            <hr />
                        </div>
                       
                    </div>
                    <div style ={styles.container} >
                    <FontAwesomeIcon icon={faUsb} size="2x" color="#8F2A92"/>
                        <div  style = {{paddingLeft : '7%'}} className="conteneLetrasAndHr">
                            <p style = {{marginRight : '80%'}}>USBs</p>
                            <hr />
                        </div>
                      
                    </div>
                    <div style ={styles.container} >
                    <FontAwesomeIcon icon={ faPencilAlt } size="2x" color="#8F2A92"/>
                        <div style = {{paddingLeft : '8%'}} className="conteneLetrasAndHr">
                            <p style = {{marginRight : '65%'}}>Lapicero </p>
                            <hr />
                        </div>
                        
                    </div>
                    <div style ={styles.container} >
                    <FontAwesomeIcon icon={ faLaptop } size="2x" color="#8F2A92"/>
                        <div style = {{paddingLeft : '6%'}} className="conteneLetrasAndHr">
                            <p style = {{marginRight : '56%'}}>Computador</p>
                            <hr />
                        </div>
                        
                    </div>
                    <div style ={styles.container} >
                    <FontAwesomeIcon icon={ faSuitcaseRolling } size="2x" color="#8F2A92"/>
                        <div style = {{paddingLeft : '9%'}} className="conteneLetrasAndHr">
                            <p style = {{marginRight : '80%'}}>Bolso </p>
                            <hr />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

const styles = {
    header : 
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '70%',
    },
    body : 
    {
        display: 'flex',
        justifyContent: 'center',
        flexDirection : 'column',
        width : '100%',
        height : '100vh',
    },
    container : 
    {
        display: 'flex',
        width: '100%',
        alignItems : 'center',       
        margin: '30px 0 0 50px',
    },
}

export default AlertsPopUp;
