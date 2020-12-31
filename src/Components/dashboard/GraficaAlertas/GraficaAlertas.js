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
    var contadorBolsoVarGP = 0;
    var contadorBotellaVarGP = 0;
    var contadorLapiceroVarGP = 0;
    var contadorCompuVarGP = 0;
    var contadorCeluVarGP = 0;
    var contadorBooksVarGP = 0;
    var contadorUSBVar = 0;
    var datosArray = 0;
    var tituloGrafico = ""
    switch(props.time)
    {
        case "day":
            setDataByTime(day);
            tituloGrafico = "últimas 24 horas"
        break;
        case "week":
            setDataByTime(week);
            tituloGrafico = "últimos 7 días"

        break;
        case "month":
            setDataByTime(month);
            tituloGrafico = "últimos 30 días"

            // console.log("entro a case")
        break;
    }

    function setDataByTime(timeframe)
    {
        if(!loading)
        {

            
            // console.log(timeframe, "FROM FUNC")
            let startDate = new Date(todaysDate.getTime() - (timeframe * 24 * 60 * 60 * 1000));
            // console.log(startDate, "fecha de inicio")
            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";
            newStartDate = "'"+ startDate.getFullYear()+"-"+(startDate.getMonth()+1) + "-" + startDate.getDate() +"'";
            // console.log(newTodaysDate, "Fecha HOY");
            // console.log(newStartDate, "Fecha de INICIO");

            for(var i = 0; i< data.length ; i++)
            {
                if(moment(newStartDate).isSameOrBefore(data[i].fecha))
                {
                    res.push(data[i])
                }
                else
                {
                    // console.log(false)
                }
            }
            res.map(elemento => {
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
                
            })

            datosArray = [contadorBolsoVarGP,contadorBotellaVarGP,contadorLapiceroVarGP,contadorCompuVarGP,contadorCeluVarGP,contadorBooksVarGP,contadorUSBVar]

        }
        // console.log(res)
    }
    

    
    const dataGrafi = {
        labels : ["Bolso",'Botella','Lapicero','Computador', 'Celular', 'Libro o cuaderno','USB'],
        datasets : 
        [
            {
                backgroundColor : ['#BF86C1', '#DB00E2', '#760079', '#DD1C80', '#1BA9C2', 'rgb(204, 87, 155)','rgb(255, 176, 160)'],
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