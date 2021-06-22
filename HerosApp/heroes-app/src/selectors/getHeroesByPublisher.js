import { heroes } from "../data/heroes";

export const getHeroesByPublisher=(publisher) => {


 const validPublisher=['DC Comics', 'Marvel Comics'];

//includes retorna un true si el objeto se encuientra dentro del arreglo
//en este caso si no esta dentro del arreglo retorna un true para entrar al error

if( !validPublisher.includes(publisher)){

    throw new Error(`Publisher "${publisher}" no es correcto`)

}

return heroes.filter(hero=> hero.publisher===publisher);

}