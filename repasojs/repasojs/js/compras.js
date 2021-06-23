class Compra extends Tarea{
    constructor(nombre,prioridad,cantidad){
      super(nombre,prioridad);
      this.cantidad=cantidad;
    }


    mostrar(){
    console.log("Mostrando compras");
    super.mostrarTareas();
    console.log(`y la cantidad a comprar es ${this.cantidad}`);
}

}


let compra1= new Compra ('jabon','Alta',7);
let compra2= new Compra ('cocas','media',3);
let compra3= new Compra ('papas cuarto','baja',5);
let compra4= new Compra ('lapiz React','Alta',6);
let compra5= new Compra ('telefono','baja',2);



console.log(compra1.mostrar());
console.log(compra2.mostrar());
console.log(compra3.mostrar());
console.log(compra4.mostrar());
console.log(compra5.mostrar());
