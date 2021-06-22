import React from 'react';
import ProtoTypes from 'prop-types'

const Gasto=({gasto})=>{


    return(
        <li >
            <p className='gastos' >

                {gasto.nombre}
                <span className='gasto'>${gasto.cantidad} </span>
                
            </p>
        </li>

    );
}

//Documentacion de componente 'Gasto' 
Gasto.ProtoTypes={

    gasto: ProtoTypes.object.isRequired
}

export default Gasto;