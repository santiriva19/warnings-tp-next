import {Doughnut} from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import FetchFunction from '../../Api-Call/Api-call-function';
import moment from 'moment'



function GraficaAlerta(props)
{
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros', props.campanaSelected)
    // console.log(props.time)
    let arrayFechas = []
    let res = []
    
    const day = 1;
    const week = 7;
    const month = 30;
    const todaysDate = new Date();
    var newTodaysDate = ""
    var newStartDate = ""
    var newStartDateTwoDaysAgo = ""
    var contadorBolsoVarGP = 0;
    var contadorBotellaVarGP = 0;
    var contadorLapiceroVarGP = 0;
    var contadorCompuVarGP = 0;
    var contadorCeluVarGP = 0;
    var contadorBooksVarGP = 0;
    var contadorFueraDePuesto = 0;
    var contadorMultiPersonas = 0;
    var datosArray = 0;
    var tituloGrafico = ""
    var fechaTipo = ""
    switch(props.time)
    {
        case "day":
            tituloGrafico = "últimas 24 horas"
            fechaTipo = "day"
            setDataByTime(day);
            
        break;
        case "week":
            tituloGrafico = "últimos 7 días"
            fechaTipo = "week"
            setDataByTime(week);
            

        break;
        case "month":
            tituloGrafico = "últimos 30 días"
            fechaTipo = "month"

            setDataByTime(month);
            
            // console.log("entro a case")
        break;
    }

    function setDataByTime(timeframe)
    {
        if(!loading)
        {
            // console.log(timeframe, "FROM FUNC")
            let startDate = new Date(todaysDate.getTime() - (timeframe * 24 * 60 * 60 * 1000));
            let twoDaysAgo = new Date(todaysDate.getTime() - (timeframe+2 * 24 * 60 * 60 * 1000));
            // console.log(startDate, "fecha de inicio")
            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";
            newStartDateTwoDaysAgo = "'"+ twoDaysAgo.getFullYear()+"-"+(twoDaysAgo.getMonth()+1) + "-" + twoDaysAgo.getDate()+"'";
            newStartDate = "'"+ startDate.getFullYear()+"-"+(startDate.getMonth()+1) + "-" + startDate.getDate() +"'";
            // console.log(newTodaysDate, "Fecha HOY");
            // console.log(newStartDate, "Fecha de INICIO");

            console.log(data[0].fecha)
            for(var i = 0; i< data.length ; i++)
            {

                if(fechaTipo === "day" )
                { 
                    if(moment(newStartDate).format("YYYY_MM_DD") <= (data[i].fecha) && (data[i].fecha >=  moment(newStartDateTwoDaysAgo).format("YYYY_MM_DD") ))
                    {
                        res.push(data[i])
                        console.log("resFecha", data[i].fecha)
                        console.log(moment(newStartDateTwoDaysAgo).format("YYYY_MM_DD"), "CONTEXTO")

                    }
                    else
                    {
                    }
                    console.log("Entro")
                }
                else 
                {
                    if(moment(newStartDate).format("YYYY-MM-DD") <= (moment(data[i].fecha).format("YYYY-MM-DD")))
                    {
                        res.push(data[i])
                    }
                    else
                    {
                    }
                }
                
            }
            res.map(elemento => {
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
                        contadorFueraDePuesto++
                    }
                    else if(elemento.objeto === "Multiples Personas" || 
                     elemento.objeto === "multiples personas" ||
                     elemento.objeto === "Múltiples Personas" || 
                     elemento.objeto === "Multiples personas" || 
                     elemento.objeto === "Múltiples Personas" ||
                     elemento.objeto === "multiples Personas" 
                     )
                    {
                        contadorMultiPersonas++
                    }
                    else
                    {
                        contadorBooksVarGP++
                    }
                }
                
            })

            datosArray = [contadorBolsoVarGP,contadorBotellaVarGP,contadorLapiceroVarGP,contadorCompuVarGP,contadorCeluVarGP,contadorBooksVarGP,contadorFueraDePuesto, contadorMultiPersonas]

        }
        // console.log(res)
    }
    

    
    const dataGrafi = {
        labels : ["Bolso",'Botella','Lapicero','Computador', 'Celular', 'Libro o cuaderno','Fuera De Puesto', "Múltiples Personas"],
        datasets : 
        [
            {
                backgroundColor : ['#BF86C1', '#DB00E2', '#760079', '#DD1C80', '#1BA9C2', 'rgb(204, 87, 155)','rgb(255, 176, 160)', 'rgb(173, 65, 103, 0.5)'],
                borderWidth : 2,
                data : datosArray,
            }
        ]
    }
    const opciones = {
        mantainAcpectRatio : false,
        responsive : true,
    }
 
    return( 
        <div className = "panelGrafica">
            <div style = {{display : 'flex', justifyContent : 'space-between', width : '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                <p className = "tituloAlertasSem">Alertas <strong style = {{color : '#8F2A92'}} >{tituloGrafico}</strong> </p>
                <FontAwesomeIcon  className = "iconoPerc" icon={faPercentage} size="2x" color="#6E6E6E" />

            </div>
           
            <div className="contGra">
                <Doughnut height = "0.1%" data = {dataGrafi} options = {opciones} />
            </div>

        </div>
    );
}
export default GraficaAlerta