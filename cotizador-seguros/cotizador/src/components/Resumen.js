import React from "react";
import styled from '@emotion/styled';
import {primerMayuscula} from './Helper';
import PropTypes from 'prop-types';

const ResumenContainer=styled.div`
padding:1rem;
text-align:center;
background-color:#00838F;
color:#fff;
margin-top:1rem;

`;

const Resumen=({datos})=>{

    //Extraer datos
    const {plan,marca,year} =datos;

    if(marca==='' || plan==='' || year==='' ){
        return null;
    }

return (
    <ResumenContainer>
    <h2>Resumen de Cotizacion</h2>
    <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {primerMayuscula(year)}</li>

    </ul>
    </ResumenContainer>
);

}

Resumen.propTypes={
    datos: PropTypes.object.isRequired
}
export default Resumen;