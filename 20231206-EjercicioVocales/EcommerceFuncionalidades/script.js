
    const productos = document.querySelectorAll('.producto');
    const carritoItems = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    let arrayCarrito = [];
    let botonPagar = document.getElementById("pagar");
    let precioTotal = 0;

    cargarCarritoDesdeLocalStorage(); // por si se cae la pagina o algo, verifico si esta en local storage

    botonPagar.addEventListener("click", function() {
        if (arrayCarrito.length !== 0) {
            alert("El total a pagar es $"+precioTotal);
            alert("Muchas gracias por su compra, vuelva pronto :)") // Falto limpiar el carrito y limpiar valores de LocalStorage
            /* arrayCarrito = null;
            actualizarCarrito();
            precioTotal = 0; */
        } else {
            alert("El carrito vacío.");
        }
    });

    // evento de click a cada botón "Agregar al carrito"
    productos.forEach(producto => {
        const agregarCarritoButton = producto.querySelector('.agregarCarrito');
        agregarCarritoButton.addEventListener('click', () => agregarAlCarrito(producto));
    });

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto) {
        const productId = producto.dataset.id;
        const productName = producto.dataset.name;
        const productPrice = parseFloat(producto.dataset.precio);

        // Verificar si el producto ya está en el carrito
        const existingItem = arrayCarrito.find(item => item.id === productId);

        if (existingItem) {
            // Incrementar la cantidad si el producto ya está en el carrito
            existingItem.quantity += 1;
        } else {
            // Agregar el producto al carrito si no está presente
            arrayCarrito.push({
                id: productId,
                name: productName,
                precio: productPrice,
                quantity: 1
            });
        }

        // Guardar el carrito en localStorage
        guardarCarritoEnLocalStorage();

        // Actualizar la visualización del carrito
        actualizarCarrito();
    }

    // Función para actualizar la visualización del carrito
    function actualizarCarrito() {
        carritoItems.innerHTML = '';
        precioTotal = 0;

        // Iterar sobre los elementos del carrito
        arrayCarrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} x ${item.quantity} - $${(item.precio * item.quantity).toFixed(2)}`;

            // Crear botón para eliminar un elemento del carrito
            const borrarButton = document.createElement('span');
            borrarButton.textContent = 'Eliminar';
            borrarButton.className = 'borrar-item mt-1';

            borrarButton.addEventListener('click', () => eliminarElemento(item.id));

            listItem.appendChild(borrarButton);
            carritoItems.appendChild(listItem);

            precioTotal = precioTotal + (item.precio * item.quantity);
        });

        // Mostrar el total del carrito
        totalElement.textContent = `Total: $${precioTotal.toFixed(2)}`;
    }

    // Función para eliminar un elemento del carrito
    function eliminarElemento(productId) {
        const itemIndex = arrayCarrito.findIndex(item => item.id === productId);

        if (itemIndex !== -1) {
            arrayCarrito.splice(itemIndex, 1);
            guardarCarritoEnLocalStorage();
            actualizarCarrito();
        }
    }

    // Función para cargar el carrito desde localStorage
    function cargarCarritoDesdeLocalStorage() {
        const carritoGuardado = localStorage.getItem('carrito');

        if (carritoGuardado) {
            arrayCarrito = JSON.parse(carritoGuardado);
            actualizarCarrito();
        }
    }

    // Función para guardar el carrito en localStorage
    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
    }