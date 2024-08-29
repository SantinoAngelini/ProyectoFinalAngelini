document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('usuario')) {
        document.getElementById('usuarioSection').style.display = 'none';
        document.getElementById('catalogoSection').style.display = 'block';
        mostrarCatalogo(); 
    }

    document.getElementById('ingresarUsuario').addEventListener('click', () => {
        const nombreUsuario = document.getElementById('usuarioInput').value;
        if (nombreUsuario) {
            localStorage.setItem('usuario', nombreUsuario);
            document.getElementById('usuarioSection').style.display = 'none';
            document.getElementById('catalogoSection').style.display = 'block';
            mostrarCatalogo(); 
        } else {
            alert("Por favor, ingrese su nombre de usuario.");
        }
    });

    document.getElementById('cerrarSesion').addEventListener('click', () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('carrito'); 
        carrito = []; 
        document.getElementById('catalogoSection').style.display = 'none';
        document.getElementById('carritoSection').style.display = 'none';
        document.getElementById('usuarioSection').style.display = 'block';
    });
});
