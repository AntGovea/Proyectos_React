import React from 'react';
import ProtoTypes from 'prop-types';

const Error=({mensaje})=>{


    return(
        <p className='alert alert-danger error'>{mensaje}</p>

    );
}

Error.ProtoTypes={

    mensaje: ProtoTypes.string.isRequired
}

export default Error;