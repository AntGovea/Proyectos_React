import React, {  useState } from "react";
import Error from './error';
import shortid from 'shortid';
import ProtoTypes from 'prop-types';


const Formulario=({setGasto,setCrearGasto})=> {
  //definir el state
  const [nombre, setNombre] = useState();
  const [cantidad, setCantidad]= useState(0);
  const [error, setError]= useState(false);
  
  // const [gastos, setGastos]= useState(false);

  //cuando el usuario agrega un gasto
  const handleAgregarGasto=(e)=>{
    e.preventDefault();
      //validar
  if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''  ){
      setError(true);
  }
  //depues de validar que es correcto , error regresa a ser false :D
    setError(false);
  
      //construir el gasto
    const gasto={
      nombre,
      cantidad,
      id: shortid.generate()
    }
        //pasar el gasto al componente proncipal
        setGasto(gasto);
        setCrearGasto(true);
     //resetear form
       setNombre('');
       setCantidad(0);
  

      
  }

  return (
   <form

     onSubmit={handleAgregarGasto}
    >
       <h2>Agrega tus gastos aqui!!</h2>
       {
         error ?  <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto' />
        : null
        }
       <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />

       </div>
       <div className='campo'>
        <label>Cantidad Gato</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e)=>setCantidad(parseInt(e.target.value))}
        />
         <input
          type="submit"
          className="button-primary u-full-width"
         value='Agregar gasto'
       
        />
       </div>
   </form>
  );
}
Formulario.ProtoTypes={

  setGasto:ProtoTypes.func.isRequired,
  setCrearGasto:ProtoTypes.func.isRequired,
}

export default Formulario;