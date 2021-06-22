import React from "react";
import styled from '@emotion/styled';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

//usando libreria @emotion para css
const Mensaje=styled.p`
background-color:rgb(127,224,237);
margin-top:2rem;
padding:1rem;
text-align:center;

`;

const Resultado=({cotizacion})=>{
   
  
return (
        
     (cotizacion===0) ? <Mensaje>Revisa elige marca,año y plan de seguro :D</Mensaje>   
     :

     <TransitionGroup
     component='span'//que tipo de etiqueta se va a animar
     className='resultado' // y su class
    
     >
         <CSSTransition
          classNames='resultado'//plural de las clases
          key={cotizacion}//valor unico que debe tener
          timeout={{enter:500, exit:500}} //tiempo
         >
         <Mensaje>El total es: $<span>{cotizacion}</span></Mensaje>  
         </CSSTransition>
     </TransitionGroup>
     
  
                );

    }
Resultado.propTypes={
    cotizacion:PropTypes.number.isRequired
}

export default Resultado;