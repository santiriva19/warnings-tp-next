import React, {Component, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsb } from '@fortawesome/free-brands-svg-icons'
import { 
    faMobile,
    faBook,
    faTintSlash,
    faPencilAlt,
    faLeaf,
    faLaptop,
    faSuitcaseRolling,
    faUsersSlash,
    faPersonBooth,
} from '@fortawesome/free-solid-svg-icons'
import FetchFunction from '../../Api-Call/Api-call-function';
import LoadingView from '../../Loading/Loading'


function Boxes(props)
{
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros', props.campanaSelected);
    const [perBolso,setPerBolso] = useState(0)
    const [perBotella,setPerBotella] = useState(0)
    const [perLapicero,setPerLapicero] = useState(0)
    const [perCompu,setPerCompu] = useState(0)
    const [perCelu,setPerCelu] = useState(0)
    const [perBook,setPerBook] = useState(0)  
    const [perFDP,setPerFDP] = useState(0) 
    const [perMultiPer,setPerMultiPer] = useState(0) 

    let campana = ''
    var contadorBolsoVarGP = 0;
    var contadorBotellaVarGP = 0;
    var contadorLapiceroVarGP = 0;
    var contadorCompuVarGP = 0;
    var contadorCeluVarGP = 0;
    var contadorBooksVarGP = 0;
    var contadorFDPVar = 0;
    var contadorMultiPerVar = 0;

    let percenBolso = 0;
    let percenBotella = 0;
    let percenLapicero = 0;
    let percenCompu = 0;
    let percenCelu = 0;
    let percenBook = 0;
    let percenFDP = 0;
    let percenMultiPer = 0;
    
    const [cargoData, setCargoData] = useState(true)
    const [cargoInfoDash, setCargoInfoDash] = useState(true)    


    useEffect(() => {
        if(!loading)
        {
            // console.log(data)
            setCargoInfoDash(true)
            data.map(elemento => {
                if(elemento.objeto !== "")
                {
                    if(elemento.objeto === "Bolso")
                    {
                        contadorBolsoVarGP++
                    }
                    else if(elemento.objeto === "Botella")
                    {
                        contadorBotellaVarGP++
                    }
                    else if(elemento.objeto === "Lapicero")
                    {
                        contadorLapiceroVarGP++
                    }
                    else if(elemento.objeto === "Varios computadores")
                    {
                        contadorCompuVarGP++
                    }
                    else if(elemento.objeto === "Celular" || elemento.objeto === "celular")
                    {
                        contadorCeluVarGP++
                    }
                    
                    else if(elemento.objeto === "Abandono puesto")
                    {
                        contadorFDPVar++
                    }
                    else if(elemento.objeto === "Multiples Personas" || 
                     elemento.objeto === "multiples personas" ||
                     elemento.objeto === "Múltiples Personas" || 
                     elemento.objeto === "Multiples personas" || 
                     elemento.objeto === "Múltiples Personas" ||
                     elemento.objeto === "multiples Personas" 
                     )
                    {
                        contadorMultiPerVar++
                    }
                    else
                    {
                        contadorBooksVarGP++
                    }
                    
                    
                    setCargoData(false)
                }
            }
           
            ) 

            var totalAlerts = contadorBolsoVarGP+contadorBotellaVarGP+contadorLapiceroVarGP+contadorCompuVarGP+contadorCeluVarGP+contadorBooksVarGP+contadorFDPVar+contadorMultiPerVar;
            percenBolso = (contadorBolsoVarGP/totalAlerts) * 100;
            percenBotella = (contadorBotellaVarGP/totalAlerts) * 100;
            percenLapicero = (contadorLapiceroVarGP/totalAlerts) * 100;
            percenCompu = (contadorCompuVarGP/totalAlerts) * 100;
            percenCelu = (contadorCeluVarGP/totalAlerts) * 100;
            percenBook = (contadorBooksVarGP/totalAlerts) * 100;
            percenFDP = (contadorFDPVar/totalAlerts) * 100;
            percenMultiPer = (contadorMultiPerVar/totalAlerts) * 100;

            setPerBolso(percenBolso);
            setPerBotella(percenBotella);
            setPerLapicero(percenLapicero);
            setPerCompu(percenCompu);
            setPerCelu(percenCelu);
            setPerBook(percenBook);
            setPerFDP(percenFDP);
            setPerMultiPer(percenMultiPer);
        }

               
        }, [loading, props])

        let info = !cargoInfoDash ? [] :
        [
            {
                icon: faMobile,
                rate: perCelu.toFixed(1),
                alertName: 'Celular'
            },
            {
                icon: faBook,
                rate: perBook.toFixed(1),
                alertName: 'Libro'
            },
            {
                icon: faTintSlash,
                rate: perBotella.toFixed(1),
                alertName: 'Botella'
            },
            {
                icon: faPencilAlt,
                rate: perLapicero.toFixed(1),
                alertName: 'Lapicero'
            },
            {
                icon: faLaptop,
                rate: perCompu.toFixed(1),
                alertName: 'Computador'
            },
            {
                icon: faSuitcaseRolling,
                rate: perBolso.toFixed(1),
                alertName: 'Bolso'
            },
            {
                icon: faPersonBooth,
                rate: perFDP.toFixed(1),
                alertName: 'Fuera De Puesto'
            },
            {
                icon: faUsersSlash ,
                rate: perMultiPer.toFixed(1),
                alertName: 'Múltiples Personas'
            },
        ]
    
    

    const boxCointainer = (valor) => {
        return ( !cargoInfoDash ?  
            <div className = "">
                <div className="box">
                    <div className="contIconBoxAndTextPerBox">
                        <div className="contIconBox">
                            <FontAwesomeIcon 
                                className = "iconBoxes" 
                                size="4x" color="#454545" 
                            />
                        </div>
                        <div className="contTextPerBox">
                            <p className="textoBoxesPer">...</p>

                        </div>
                    </div>
                    <div className="contTextBox">
                        <p className="textoBoxes">...</p>
                    </div>
                
                </div>
            </div>       
            :

            valor.rate === "NaN" ? 
            <div className = "">
                <div className="box">
                    <div className="contIconBoxAndTextPerBox">
                        <div className="contIconBox">
                            <FontAwesomeIcon 
                                icon={valor.icon} 
                                className = "iconBoxes" 
                                size="4x" color="#454545" 
                            />
                        </div>
                        <div className="contTextPerBox">
                            <p className="textoBoxesPer"> 0.0%</p>

                        </div>
                    </div>
                    <div className="contTextBox">
                        <p className="textoBoxes"> {valor.alertName} </p>
                    </div>
                
                </div>
            </div>
        :
            

            <div className = "">
                <div className="box">
                    <div className="contIconBoxAndTextPerBox">
                        <div className="contIconBox">
                            <FontAwesomeIcon 
                                icon={valor.icon} 
                                className = "iconBoxes" 
                                size="4x" color="#454545" 
                            />
                        </div>
                        <div className="contTextPerBox">
                            <p className="textoBoxesPer"> {valor.rate}%</p>

                        </div>
                    </div>
                    <div className="contTextBox">
                        <p className="textoBoxes"> {valor.alertName} </p>
                    </div>
                
                </div>
            </div>       
        )
    }


        return ( !cargoInfoDash ? '' : loading ? 
            <div className = "">
                <div className="box">
                    <div className="contIconBoxAndTextPerBox">
                        <div className="contIconBox">
                            <FontAwesomeIcon 
                                 
                                className = "iconBoxes" 
                                size="4x" color="#454545" 
                            />
                        </div>
                        <div className="contTextPerBox">
                            <p className="textoBoxesPer">...</p>

                        </div>
                    </div>
                    <div className="contTextBox">
                        <p className="textoBoxes">...</p>
                    </div>
                
                </div>
            </div>       
            :
            <div style = {{display : 'flex', justifyContent : 'center', flexWrap : 'wrap'}}>
                {info.map(alert => {
                        console.log(alert)
                      
                        return(
                            <div style ={{marginLeft : '1%'}} >{boxCointainer(alert)}</div>

                        )
                        
                    })
                }
                
            </div>
        )
    
}

export default Boxes
