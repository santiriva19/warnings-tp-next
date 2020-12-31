import React from 'react';
import {Line} from 'react-chartjs-2';
import FetchFunction from '../../Api-Call/Api-call-function';
import moment from 'moment'



export default function NumAlerta(props)
{
    let res = []
    let dia = 1000 * 60 * 60 * 24

    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros',props.campanaSelected);

    
    // var currentNumberDate = 3
    var currentNumberDate = moment().weekday()
    var lastLunesDate ;
    var lastDomingoDate ;
    // var todaysDate = new Date("2020-10-15");
    var todaysDate = new Date();
    var newTodaysDate = ""
    var startDateToLunes
    var startDateToDomingo
    var datosArray = []


    const saberFechas = () =>
    {
        if(currentNumberDate === 1)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (7 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (1 * 24 * 60 * 60 * 1000));

            newTodaysDate = '"'+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+'"';

            lastLunesDate = '"'+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +'"';
            lastDomingoDate = '"'+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +'"';
        }
        else if(currentNumberDate === 2)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (8 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (2 * 24 * 60 * 60 * 1000));

            newTodaysDate = '"'+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+'"';

            lastLunesDate = '"'+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +'"';
            lastDomingoDate = '"'+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +'"';
        }
        else if(currentNumberDate === 3)
        {
            startDateToLunes = new Date(todaysDate.getTime() - (9 * 24 * 60 * 60 * 1000));
            startDateToDomingo = new Date(todaysDate.getTime() - (3 * 24 * 60 * 60 * 1000));

            newTodaysDate = '"'+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+'"';

            lastLunesDate = '"'+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +'"';
            lastDomingoDate = '"'+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +'"';
        }
        else if(currentNumberDate === 4)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (10 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (4 * 24 * 60 * 60 * 1000));

            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";

            lastLunesDate = "'"+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +"'";
            lastDomingoDate = "'"+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +"'";
        }
        else if(currentNumberDate === 5)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (11 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (5 * 24 * 60 * 60 * 1000));

            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";

            lastLunesDate = "'"+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +"'";
            lastDomingoDate = "'"+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +"'";
        }
        else if(currentNumberDate === 6)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (12 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (6 * 24 * 60 * 60 * 1000));

            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";

            lastLunesDate = "'"+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +"'";
            lastDomingoDate = "'"+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +"'";
        }
        else if(currentNumberDate === 7)
        {
            let startDateToLunes = new Date(todaysDate.getTime() - (13 * 24 * 60 * 60 * 1000));
            let startDateToDomingo = new Date(todaysDate.getTime() - (7 * 24 * 60 * 60 * 1000));

            newTodaysDate = "'"+ todaysDate.getFullYear()+"-"+(todaysDate.getMonth()+1) + "-" + todaysDate.getDate()+"'";

            lastLunesDate = "'"+ startDateToLunes.getFullYear()+"-"+(startDateToLunes.getMonth()+1) + "-" + startDateToLunes.getDate() +"'";
            lastDomingoDate = "'"+ startDateToDomingo.getFullYear()+"-"+(startDateToDomingo.getMonth()+1) + "-" + startDateToDomingo.getDate() +"'";
        }
    }

    const ponerInfo = () =>
    {
       let d = new Date()
       var lunes = new Date(lastLunesDate)
       var lunesConverted
       var arrayFechas=[lastLunesDate]
       var res = []
        // console.log(lastLunesDate)
        var conta =0
        var conta2 =0
        var contaLunes = 0
        var contaMartes = 0
        var contaMiercoles = 0
        var contaJueves = 0
        var contaViernes = 0
        var contaSabado = 0
        var contaDomingo = 0
        if(!loading)
        {
                do
                {
                    lunes = new Date(lunes.getTime() + dia)
    
                    lunesConverted = '"'+ lunes.getFullYear()+"-"+(lunes.getMonth()+1) + "-" + lunes.getDate() +'"';
    
                    arrayFechas.push(lunesConverted)
                    conta++
                }
                while( conta < 7 )

                do
                {
                    // console.log(arrayFechas[conta2])
                    data.map(index => {
                        if(moment(arrayFechas[conta2]).isSame(index.fecha))
                        {
                            // console.log(index, " index en " + conta2)
                            res.push(index)
                            if(conta2 === 0)
                            {
                                contaLunes++
                            }
                            else if(conta2 === 1)
                            {
                                contaMartes++
                            }
                            else if(conta2 === 2)
                            {
                                contaMiercoles++
                            }
                            else if(conta2 === 3)
                            {
                                contaJueves++
                            }
                            else if(conta2 === 4)
                            {
                                contaViernes++
                            }
                            else if(conta2 === 5)
                            {
                                contaSabado++
                            }
                            else if(conta2 === 6)
                            {
                                contaDomingo++
                            }

                        }
                        
                    })
                    
                    
                    conta2++
                }
                while(conta2 < 7)
                    // console.log(arrayFechas[i])
                    // data.map(index => {
                    //     console.log(index)
                    //     // if(index.fecha === arrayFechas[i])
                    //     // {
                    //     //     res.push(index)
                    //     // }
                    // })
                
                // console.log(res)
                if(res !== [])
                {
                    datosArray = [contaLunes, contaMartes, contaMiercoles, contaJueves, contaViernes, contaSabado, contaDomingo]
                }
                
           
        }
    }

    saberFechas()

    ponerInfo()

    
    // console.log(moment().weekday(3))
            // console.log(lastLunesDate)
            // console.log(lastDomingoDate)
    // var lastDomingo;
    // var lastMonday;

    // var iteratedDay = 0
    // var contador
    // do
    // {
    //     iteratedDay = new Date().getDate()
    //     if()
    //     {

    //     }
    // }
    // while(iteratedDay)

    
    // const { data, loading} = FetchFunction('');

    const jsonAlertas = 
    [
        {
            labelsAlertas : ['Lun','Mar','Mie','Jue','Vie','Sáb'],
            datos : datosArray,
            frecienciaTemporal : 'Alertas última semana'
        },
        {
            labelsAlertas : ['Lun','Mar','Mie','Jue','Vie','Sáb'],
            datos : [32,15,10,23,4,8],
            frecienciaTemporal : 'Alertas semanales'
        },
        {
            labelsAlertas : ['Ene','Feb','Mar','Abr','May','Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datos : [32,15,10,23,4,8,3,12,42,10,11,25],
            frecienciaTemporal : 'Alertas mensuales'
        },
    ]
    
    
    
    const dataGrafi = {
        labels : jsonAlertas[0].labelsAlertas,
        datasets : 
        [
            {
                label : jsonAlertas[0].frecienciaTemporal,
                data : jsonAlertas[0].datos,
                backgroundColor : '#D78BD9',
                borderColor : '#8F2A92',
                borderWidth : 2,
                hoverBackgroundColor : '#D78BD9',
                hoverBorderColor : '#06A3BF',
                borderDashOffset: 0.0,
            }
        ]
    }
    const opciones = {
        mantainAspectRatio : false,
    }
    return(
        <div className = "panelNumAlerta">
            {/* change data with  */}
            <Line id ="chart" useRef="chart" data = {dataGrafi} options = {opciones} />
        </div>
    );
}
