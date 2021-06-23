const nombre="Antonio";
const edad="23";

console.log(`Mi nombre es: ${nombre} , y mi edad es: ${edad}` );

//concatenar con multiples lineas
const contenedorApp=document.querySelector('#App');

/******************************** *
 * //llamando a una api
 */
const descargarUsuarios = new Promise((resolve,reject) =>{

const apiUsuarios="https://mxap2020.herokuapp.com/api/usuarios";

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET',apiUsuarios,true);

    //on loand
    xhr.onload=()=>{
        if(xhr.status===200){
                resolve (JSON.parse(xhr.responseText));
        }else{
                reject (Error(xhr.statusText));
        }

    }
    xhr.onerror=(error)=> reject(error);
        //send
        xhr.send()
     });

        descargarUsuarios.then(

           usuarios=>imprimirHTMLUsuarios(usuarios) ,
           error=>console.error(
               new Error('Houstoun tenemos un Error ' +error)
           )
        )

   
function imprimirHTMLUsuarios(usuarios){
    let  html ='';


    usuarios.forEach(usuario => {
    
       
    
        html+=
      `<li>
            id :${usuario._id} ,  <br/>
            nombre de usuario :"${usuario.nombre}" , <br/>
            contraseña :" ${usuario.pass}" , <br/>
            Fecha de creacion :"${usuario.createdAt}" , <br/>
            Fecha de modificacion :" ${usuario.updatedAt}", <br/>
            version de documento :" ${usuario.__v}", <br/>
        </li> 
            <br/>`;
        });  
        const contenedorApp=document.querySelector('#App-header');
        contenedorApp.innerHTML=html;
}


    
