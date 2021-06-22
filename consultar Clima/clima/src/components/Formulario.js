import React, { Fragment, useState } from "react";
import Error from "./Error";
import propTypes from 'prop-types';
function Formulario({ busqueda,setBusqueda,setConsultar,consultar }) {
  //state de formuario

  const [error, setError] = useState(false);

  //destructurig XD
  const { ciudad, pais } = busqueda;

  //funcion que coloca los valores en el state
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
 
    //prevenir actualizacion de formulario
    e.preventDefault();

    //validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return; //regresar al usuario a su casita carnal ;que no se te olvide
    }
    setError(false);

    //consultar api para hacer busqueda
    // const opc=!setConsultar();
    // console.log(opc);
    setConsultar(!consultar);

  };
  

  return (
    <Fragment>
        
      <form onSubmit={handleSubmit}>
      {error ? <Error mensaje={'Ambos los campos deben ser llenados'}/> 
           : null}
        <div className="input-field col s12">
            
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad:</label>
        </div>

        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">--Seleccione un pais--</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>

          <label htmlFor="pais">Pais:</label>
        </div>
        <div className="input-field col s12">
        <input
            type="submit"
            value="Buscar Clima"
            className='waves-effect waves-light btn-large btn-block yellow accent-4'
           
          />
          </div>
      </form>
    </Fragment>
  );
}

Formulario.propTypes={
  busqueda:propTypes.object.isRequired,
  setBusqueda:propTypes.func.isRequired,
  setConsultar:propTypes.func.isRequired,
  consultar:propTypes.bool.isRequired,
}
export default Formulario;
