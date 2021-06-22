import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="red darken-4 error">{mensaje}</p>
     );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
Error.propTypes={
    mensaje:propTypes.string.isRequired,
  
  }
export default Error;
