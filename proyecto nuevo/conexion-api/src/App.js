import { ConexionApiGift } from "./conexionApi/ConexionApiGift";


function App() {


  const persona=   {
    nombre:'Antonio',
    apellido:'Govea',
    edad:23, 
  }


  //funcion sin return
  const handleClick=()=>({ 
     saludo :  'devolviendo sin return :D',
     saludos :  'devolviendo sin return :D',
  });

// console.log(handleClick());


  return (
    <div className="App">
     {/* <h1>Haciendo Pruebas carnal :D</h1> */}
     {/* <button onClick={handleClick}>Click</button> */}
     <ConexionApiGift/>
    </div>
  );
}

export default App;
