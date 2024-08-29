let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(index) {
    const juego = juegos[index];
    const cantidadInput = document.getElementById(`cantidad${index}`);
    const cantidad = parseInt(cantidadInput.value);

    if (cantidad && cantidad > 0) {
        if (cantidad > juego.cantidad) {
            alert("La cantidad seleccionada no está disponible");
        } else {
            const itemEnCarrito = carrito.find(item => item.juego === juego);
            if (itemEnCarrito) {
                itemEnCarrito.cantidad += cantidad;
            } else {
                carrito.push({ juego, cantidad });
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert("¡Su juego se agregó al carrito!");
        }
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}

function mostrarCarrito() {
    const carritoLista = document.getElementById('carritoLista');
    const totalCarrito = document.getElementById('totalCarrito');
    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.juego.nombre} - $${item.juego.precio} x ${item.cantidad}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoLista.appendChild(li);
        total += item.juego.precio * item.cantidad;
    });

    totalCarrito.innerHTML = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

document.getElementById('verCarrito').addEventListener('click', () => {
    document.getElementById('catalogoSection').style.display = 'none';
    document.getElementById('carritoSection').style.display = 'block';
    mostrarCarrito();
});

document.getElementById('finalizarCompra').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    carrito = [];
    alert("¡Muchas gracias por su compra!");
    document.getElementById('carritoSection').style.display = 'none';
    document.getElementById('catalogoSection').style.display = 'block';
    mostrarCatalogo();
});

document.getElementById('volverCatalogo').addEventListener('click', () => {
    document.getElementById('carritoSection').style.display = 'none';
    document.getElementById('catalogoSection').style.display = 'block';
});