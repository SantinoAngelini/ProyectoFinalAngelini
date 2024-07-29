//Bienvenida y ingreso de usuario
let nombreUsuario = prompt("¡Bienvenido a My Key Argentina! por favor ingrese su usuario:");
while (nombreUsuario === "") {
    nombreUsuario = prompt("Por favor, ingrese su usuario");
}


//Declaracion de variables
const juego1 = 27000;
const juego2 = 13000;
const juego3 = 60000;
const juego4 = 8700;
const juego5 = 43000;


let opcion = 0;

let opcionJuego1 = 0;
let opcionJuego2 = 0;
let opcionJuego3 = 0;
let opcionJuego4 = 0;
let opcionJuego5 = 0;


const cantJuego1 = 3;
const cantJuego2 = 2;
const cantJuego3 = 6;
const cantJuego4 = 9;
const cantJuego5 = 1;



alert("Hola " + nombreUsuario + ", este es el catalogo del dia de hoy ");


//Bucle el cual permite seleccionar los juegos deseados y agregarlos al carrito
while (opcion !== "6") {
    opcion = prompt ("Catalogo de hoy:\n1) Mortal kombat 11\n2) Dark souls 3\n3) Elden ring\n4) Little nightmares\n5) God of war: Ragnarok\n6) Ver Carrito");

    switch (opcion) {
    case "1":
        opcionJuego1 = parseInt(
            prompt("El juego Mrotal Kombat 11 tiene un precio de $" + juego1 + " por unidad.\nCantidad disponible: " + cantJuego1)
        );
        if (opcionJuego1 > cantJuego1) {
            alert("La cantidad seleccionada no esta disponible");
            opcionJuego1 = 0;
        }else{
            alert("¡Su juego se agrego al carrito!")
        }
        break;
    case "2":
        opcionJuego2 = parseInt(
            prompt("El juego Dark souls 3 tiene un precio de $" + juego2 + " por unidad.\nCantidad disponible: " + cantJuego2)
        );
        if (opcionJuego2 > cantJuego2) {
            alert("La cantidad seleccionada no esta disponible");
            opcionJuego2 = 0;
        }else{
            alert("¡Su juego se agrego al carrito!")
        }
        break;
    case "3":
        opcionJuego3 = parseInt(
            prompt("El juego Elden ring tiene un precio de $" + juego3 + " por unidad.\nCantidad disponible: " + cantJuego3)
        );
        if (opcionJuego3 > cantJuego3) {
            alert("La cantidad seleccionada no esta disponible");
            opcionJuego3 = 0;
        }else{
            alert("¡Su juego se agrego al carrito!")
        }
        break;
    case "4":
        opcionJuego4 = parseInt(
            prompt("El juego Little nightmares tiene un precio de $" + juego4 + " por unidad.\nCantidad disponible: " + cantJuego4)
        );
        if (opcionJuego4 > cantJuego4) {
            alert("La cantidad seleccionada no esta disponible");
            opcionJuego4 = 0;
        }else{
            alert("¡Su juego se agrego al carrito!")
        }
        break;
    case "5":
        opcionJuego5 = parseInt(
            prompt("El juego God of war: Ragnarok tiene un precio de $" + juego5 + " por unidad.\nCantidad disponible: " + cantJuego5)
        );
        if (opcionJuego5 > cantJuego5) {
            alert("La cantidad seleccionada no esta disponible");
            opcionJuego5 = 0;
        }else{
            alert("¡Su juego se agrego al carrito!")
        }
        break;
    case "6":
        break;
    }
}

//Muestra la suma total de todos los juegos seleccionados en el carrito
const totalCarrito = (opcionJuego1 * juego1) + (opcionJuego2 * juego2) + (opcionJuego3 * juego3) + (opcionJuego4 * juego4) + (opcionJuego5 * juego5);
alert("El total del carrito es: $" + totalCarrito);
alert("¡Muchas gracias por su compra!")