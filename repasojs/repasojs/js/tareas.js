 const nombreTarea='pasear al perro';


 export default nombreTarea;


class Tarea{
    constructor(nombre,prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad;
    }

    mostrarTareas(){
        console.log( `${this.nombre} tiene  una prioridad de ${this.prioridad}`);
    }

}




let tarea1= new Tarea ('Aprender Javascript','Alta');
let tarea2= new Tarea ('bañar a mufis','media');
let tarea3= new Tarea ('limpiar cuarto','baja');
let tarea4= new Tarea ('Aprender React','Alta');
let tarea5= new Tarea ('entrenar','baja');


console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());
console.log(tarea5.mostrar());

