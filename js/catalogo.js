class Juego {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const juegos = [
    new Juego("Mortal Kombat 11", 27000, 3),
    new Juego("Dark Souls 3", 13000, 2),
    new Juego("Elden Ring", 60000, 6),
    new Juego("Little Nightmares", 8700, 9),
    new Juego("God of War: Ragnarok", 43000, 1)
];

function mostrarCatalogo() {
    const catalogoLista = document.getElementById('catalogoLista');
    catalogoLista.innerHTML = '';
    juegos.forEach((juego, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${index + 1}) ${juego.nombre} - $${juego.precio} (Cantidad disponible: ${juego.cantidad})
            <input type="number" id="cantidad${index}" min="1" max="${juego.cantidad}" placeholder="Cantidad" />
            <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
        `;
        catalogoLista.appendChild(li);
    });
}
