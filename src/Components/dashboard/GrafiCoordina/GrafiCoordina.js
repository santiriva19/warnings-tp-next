import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


export default class GrafiCoordina extends Component
{
    
    data;
    labelsAcordingToTime;
    jsonCoordinadorDataDiaria;
    coloresFondo;
    coloresHover;
    datosEnviados;
    constructor(props)
    {
        super(props);
        
        this.tomarValores();

    }

    tomarValores()
    {
        this.labelsAcordingToTime = [
            {
                id : 1,
                timeType : 'dia',
                labels : ['Lun','Mar','Mie','Jue','Vie','Sáb'],
            },
            {
                id : 2,
                timeType : 'semana',
                labels : ['1','2','3','4'],
            },
            {
                id : 3,
                timeType : 'mes',
                labels : ['Ene','Fez','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
            }
        ]
        
        this.jsonCoordinadorDataDiaria = 
        [
            {
                ccms : '123456',
                name : 'J. ',
                lastname : 'Riva',
                data : [23,15,32,7,5,23]
        
            },
            {
                ccms : '123456',
                name : 'S. ',
                lastname : 'Riva',
                data : [21,26,23,17,15,35]
        
            },
            {
                ccms : '123456',
                name : 'S. ',
                lastname : 'Avella',
                data : [16,12,1,7,25,14]
        
            },
            {
                ccms : '123456',
                name : 'S. ',
                lastname : 'Bejarano',
                data : [12,15,4,27,12,12]
        
            },
            {
                ccms : '123456',
                name : 'M. ',
                lastname : 'Lis',
                data : [7,8,9,10,19,21]
        
            },
            {
                ccms : '123456',
                name : 'S. ',
                lastname : 'Arevalo',
                data : [11,10,8,9,8,7]
        
            },
            {
                ccms : '123456',
                name : 'V. ',
                lastname : 'Novoa',
                data : [14,13,12,11,8,12]
        
            },
            {
                ccms : '123456',
                name : 'J. ',
                lastname : 'Rubio',
                data : [15,21,12,21,13,15]
        
            },
        ]
        
        this.coloresFondo = ['rgb(147, 46, 207)','rgb(211, 48, 241)','rgb(133, 33, 87)','rgb(163, 51, 140)','rgb(203, 127, 206)','rgb(91, 34, 88)','rgb(95, 79, 133)','rgb(214, 173, 240)','rgb(201, 128, 176)','rgb(255, 193, 243)','rgb(123, 21, 124)','rgb(224, 0, 134)','rgb(204, 87, 155)','rgb(255, 176, 160)','rgb(173, 65, 103)']
        this.coloresHover = ['rgb(147, 46, 207, 0.5)','rgb(211, 48, 241, 0.5)','rgb(133, 33, 87, 0.5)','rgb(163, 51, 140, 0.5)','rgb(203, 127, 206, 0.5)','rgb(91, 34, 88, 0.5)','rgb(95, 79, 133, 0.5)','rgb(214, 173, 240, 0.5)','rgb(201, 128, 176, 0.5)','rgb(255, 193, 243, 0.5)','rgb(123, 21, 124, 0.5)','rgb(224, 0, 134, 0.5)','rgb(204, 87, 155, 0.5)','rgb(255, 176, 160, 0.5)','rgb(173, 65, 103, 0.5)']  
        
        this.enviarInfo();
    }

    enviarInfo()
    {
        this.data = "" ;
        this.datoslpm = "" ;
        this.datosEnviados = "" ;
        var arrayData = [];
        
        for(let i = 0; i < this.jsonCoordinadorDataDiaria.length; i++)
        {
            // this.data = this.data ;
            arrayData.push(
                {
                    label :  this.jsonCoordinadorDataDiaria[i].name + this.jsonCoordinadorDataDiaria[i].lastname,
                    backgroundColor :  this.coloresFondo[i],
                    borderWidth : 2,
                    hoverBorderColor : '#06A3BF',
                    hoverBackgroundColor : this.coloresHover[i],
                    data : this.jsonCoordinadorDataDiaria[i].data
                }
            )


            }
        this.datosEnviados = {
            labels : this.labelsAcordingToTime[0].labels,
            datasets : arrayData
        }

    }

    render()
    {
        return(
            <div className="panelResumen">          
                
                <Bar id ="chartCoordina" useRef="chart" data = {this.datosEnviados} options = {this.opciones} />

            </div>
        );
    }
}
