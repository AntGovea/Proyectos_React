import React from 'react'



export const ConexionApiGift = () => {

const getImagenPromesa=()=>{

    const promesa = new Promise ( (resolve,reject)=>{
        resolve ('un url mamalon');  
    })

    return promesa;
}


 return (
     <div>
            {console.log(getImagenPromesa().then(console.log))}
            
        </div>
    )
}
