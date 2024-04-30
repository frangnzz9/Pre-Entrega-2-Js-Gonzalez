class Prendas {
    constructor(nombre, tipo, color, talle){
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.talle = talle;
    };
};

const arrayCarrito = [
    {
       nombre: "",
       tipo: "",
       color: "",
       talle: "",
    }
];

function crearPrenda(nombre, tipo, color, talle){
    const nuevaPrenda = new Prendas(nombre, tipo, color, talle);
    arrayCarrito.push(nuevaPrenda);
};

let continuar;
for(let i = 0; i < 1; i++){
    let nombreCliente = prompt("Ingrese su nombre").toLocaleUpperCase();
    alert("¡Bienvenidos a Cosmos "+ nombreCliente + "!")
    arrayCarrito.pop([0]);

do{
    let eleccion2 = parseInt(prompt("Ingrese una opción: \n\n 1. Agregar productos \n 2. Eliminar producto anterior \n 3. Salir"));
    if(eleccion2 === 1){

    const nuevoArticulo = prompt("Ingrese la prenda que desee:\n\n(Remera, short, pantalón, buzo, campera)");
    const nuevoTipo = prompt("Ingrese el tipo de prenda:\n\n(Marca, club, tela)");
    const nuevoColor = prompt("Ingrese el color:\n\n(Negro, blanco, gris, rojo, azul y más)");
    const nuevoTalle = prompt("Ingrese el talle:\n\n(S, M, L, XL, XXL, XXXL)");

    crearPrenda(nuevoArticulo, nuevoTipo, nuevoColor, nuevoTalle);
    alert("Agregaste con éxito tu prenda. Vea en consola al salir (F12)");

    

} else if(eleccion2 === 2){
    arrayCarrito.pop(crearPrenda.nuevaPrenda);
    alert("Eliminaste la prenda anterior")
    console.log("Eliminaste con éxito la prenda anterior")
} else if (eleccion2 === 3){
    continuar = false;
} else{
    alert("Ingresaste una opción no válida.")
}
}while(continuar !== false);
}

arrayCarrito.forEach(el => console.log("Agregaste la prenda con éxito: " + el.nombre + " de "+ el.tipo + " de color " + el.color + " talle " + el.talle));
console.log(arrayCarrito);