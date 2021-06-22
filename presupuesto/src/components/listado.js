import React from 'react';
import Gasto  from './Gasto';
import ProtoTypes from 'prop-types';


const Listado=({gastos})=>{


    return(
       <div className='gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map(gasto=>(
            <Gasto  
            key={gasto.id}
            gasto={gasto}
             />
            ))}

       </div>

    );
}
//Documentacion de componente ''Listado' 
Listado.ProtoTypes={

        gastos: ProtoTypes.array.isRequired
}

export default Listado;

