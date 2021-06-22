import React, { Fragment } from 'react';
import {revisarPresupuesto} from "../helper";
import ProtoTypes from 'prop-types';

const ControlPresupuesto=({presupuesto,restante})=>{


    return(
        <>
       <div className='alert alert-primary' >
            Presupuesto:${presupuesto}

       </div>
       <div className={revisarPresupuesto(presupuesto,restante) } >
            Restante:${restante}

       </div>
</>
    );
}

ControlPresupuesto.ProtoTypes={

    presupuesto: ProtoTypes.number.isRequired,
    restante: ProtoTypes.number.isRequired,
}

export default ControlPresupuesto;