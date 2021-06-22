import React, { Fragment } from "react";
import propTypes from 'prop-types';


function Clima({resultado_clima}) {
  
 //extraer los valores del clima
 const {name,main}= resultado_clima;

 if(!name) return null;


 //grados kelvin
 const kelvin=273.15;
  return (
    <Fragment>
     <div className='card-panel white col s12'>
       <h2>El clima de {name} es :</h2>
       <p className='temperatura'>
         { parseFloat (main.temp  -  kelvin, /*a base */10).toFixed(2)/*a 2 digitos decimales con FixedFunction */}
         <span>&#x2103;</span>{/*signo de grados centigrados */}
       </p>
       <p >Temperatura Maxima
         { parseFloat (main.temp_max  -  kelvin, /*a base */10).toFixed(2)/*a 2 digitos decimales con FixedFunction */}
         <span>&#x2103;</span>{/*signo de grados centigrados */}
       </p>
       <p >Temperatura Minima
         { parseFloat (main.temp_min -  kelvin, /*a base */10).toFixed(2)/*a 2 digitos decimales con FixedFunction */}
         <span>&#x2103;</span>{/*signo de grados centigrados */}
       </p>

     </div>
    </Fragment>
  );
}

Clima.propTypes={
  resultado_clima:propTypes.object.isRequired,

}

export default Clima;
