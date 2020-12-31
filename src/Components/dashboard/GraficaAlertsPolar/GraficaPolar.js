import React, {Component, useState, useEffect} from 'react';
import {Polar} from 'react-chartjs-2';

import FetchFunction from '../../Api-Call/Api-call-function';




function GraficaPolar(props)
{

    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros', props.campanaSelected);
    const [perBolso,setPerBolso] = useState(0)
    const [perBotella,setPerBotella] = useState(0)
    const [perLapicero,setPerLapicero] = useState(0)
    const [perCompu,setPerCompu] = useState(0)
    const [perCelu,setPerCelu] = useState(0)
    const [perBook,setPerBook] = useState(0)  
    const [perUsb,setPerUsb] = useState(0) 

    let campana = ''
    var contadorBolsoVarGP = 0;
    var contadorBotellaVarGP = 0;
    var contadorLapiceroVarGP = 0;
    var contadorCompuVarGP = 0;
    var contadorCeluVarGP = 0;
    var contadorBooksVarGP = 0;
    var contadorUSBVar = 0;

    let percenBolso = 0;
    let percenBotella = 0;
    let percenLapicero = 0;
    let percenCompu = 0;
    let percenCelu = 0;
    let percenBook = 0;
    let percenUsb = 0;

    const [datosArrayGrafiPolar ,setDatosArrayGrafiPolar] = useState([])
    const [cargoData, setCargoData] = useState(true)
    const [cargoInfoDash, setCargoInfoDash] = useState(true)
    const [loadingGrafiPolar, setLoadingGrafiPolar] = useState(true)    
    useEffect(() => {
        if(!loading)
        {
            setCargoInfoDash(true)
            data.map(elemento => 
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
                else if(elemento.objeto === "Computador")
                {
                    contadorCompuVarGP++
                }
                else if(elemento.objeto === "Celular")
                {
                    contadorCeluVarGP++
                }
                
                else if(elemento.objeto === "USB")
                {
                    contadorUSBVar++
                }
                else
                {
                    contadorBooksVarGP++
                }
                setCargoData(false)

                }
           
            ) 

            var totalAlerts = contadorBolsoVarGP+contadorBotellaVarGP+contadorLapiceroVarGP+contadorCompuVarGP+contadorCeluVarGP+contadorBooksVarGP+contadorUSBVar
            percenBolso = (contadorBolsoVarGP/totalAlerts) * 100
            percenBotella = (contadorBotellaVarGP/totalAlerts) * 100
            percenLapicero = (contadorLapiceroVarGP/totalAlerts) * 100
            percenCompu = (contadorCompuVarGP/totalAlerts) * 100
            percenCelu = (contadorCeluVarGP/totalAlerts) * 100
            percenBook = (contadorBooksVarGP/totalAlerts) * 100
            percenUsb = (contadorUSBVar/totalAlerts) * 100
            setDatosArrayGrafiPolar([contadorBolsoVarGP, contadorBotellaVarGP, contadorLapiceroVarGP,contadorCompuVarGP, contadorCeluVarGP, contadorBooksVarGP, contadorUSBVar])

            setPerBolso(percenBolso)
            setPerBotella(percenBotella)
            setPerLapicero(percenLapicero)
            setPerCompu(percenCompu)
            setPerCelu(percenCelu)
            setPerBook(percenBook)
            setPerUsb(percenUsb)

            setLoadingGrafiPolar(false)
        }

               
        }, [loading, props])

    const datosFromApi=
        {
            labelArray : ["Bolso",'Botella','Lapicero','Computador', 'Celular', 'Libro o cuaderno','USB'],
            datosArray : datosArrayGrafiPolar,
            backgroundColorArray : ['rgb(123, 21, 124)','rgb(224, 0, 134)','rgb(204, 87, 155)','rgb(95, 79, 133)','rgb(173, 65, 103)', 'rgb(204, 87, 155)','rgb(255, 176, 160)'],
        }

    let dataChart = {
        labels : datosFromApi.labelArray, 
        datasets : [
            {
                backgroundColor : datosFromApi.backgroundColorArray,
                borderWidth : 2,
                data : datosFromApi.datosArray
            }
        ]
    }
    let opciones = {
        mantainAspectRatio : false,
        responsive :true
    }   
    return(!cargoInfoDash ? '' : loading ? 
    
        <div className="panelResumen1">

            <p className="tituloResumen">
                Acumulado total
            </p>
            <Polar/>

        </div>
        
        :

        <div className="panelResumen1">

            <p className="tituloResumen">
                Acumulado total
            </p>
            <Polar  data = {dataChart} options = {opciones}/>

        </div>
    );
    
}
export default GraficaPolar

// const styles = {
//     renglon :{
//         display : 'flex',
//         width : '100%',
//         height : '15%',
//         justifyContent : 'space-between',
//         flexDirection : 'row'

//     },

// }