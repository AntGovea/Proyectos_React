import React, { Fragment, useState } from "react";
import Error from './error';
import ProtoTypes from 'prop-types';

const Pregunta = ({setPresupuesto,setRestante,setMostarpregunta}) => {
  //useState
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Metodo encargado de definir y validar el presupuesto ingresado por el usuario
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

        //Validad
        if(cantidad<1 || isNaN(cantidad) ){
            setError(true);
            return;
        }
        //si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostarpregunta(false);


  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto"/> :null}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.ProtoTypes={

  setPresupuesto:ProtoTypes.func.isRequired,
  setRestante:ProtoTypes.func.isRequired,
  setMostarpregunta:ProtoTypes.func.isRequired
}

export default Pregunta;
