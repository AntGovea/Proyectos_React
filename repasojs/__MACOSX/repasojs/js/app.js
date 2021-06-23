//crear variables


/*
var aprendiendo ="Holi";
aprendiendo =2020;



const aprendiendo ="Javascript";

aprendiendo =true;
*/
const nombre="Antonio";
const edad="23";

console.log(`Mi nombre es: ${nombre} , y mi edad es: ${edad}` );

//concatenar con multiples lineas
const contenedorApp=document.querySelector('#app');

/******************************** *
 * //llamando a una api
 */
const aplicarDescuento = new Promise((resolve,reject) =>{

    setTimeout(()=> {
         
    let descuento=!false;
 
    if(descuento){
        resolve('DEscuentop Aplicado!!!')
    }
    else{
        reject ('tuvimos un error con la nasa') 
        }   
    },  3000);
                });

    aplicarDescuento.then(resultado =>{
        console.log(resultado);
    })
