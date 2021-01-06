import React, {useState} from 'react'
import Countdown from 'react-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
function Crono(props){
    const date = Date.now()
    // const OPTIONS = {autoPlay : true, prefix: 'seconds elapsed!', delay: 100}
    return(
        <div className = "crono">
            <div style = {{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                marginRight: 9,
                opacity: '0.7',
                fontSize: 13
            }}>
                <FontAwesomeIcon 
                    className = "" 
                    icon={faRedoAlt} 
                    size="1x" 
                    color="#454545" 
                />
            </div>
            
            <Countdown
                className = "crono"
                date={date + 600000}
                intervalDelay={0}
                // precision={3}
                renderer={props => <div>{ props.minutes+" : "+ props.seconds +" / 10 : 00"}</div>}
                onComplete = {() => window.location.reload()}
            />
            
        </div>
        
    )
}
export default Crono