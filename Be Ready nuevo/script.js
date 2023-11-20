// Obtener todos los elementos de la lista
const itemsNosotros = document.querySelectorAll('.item-nosotros');

// Función para verificar si un elemento es visible en la ventana
function esElementoVisible(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

// Función para mostrar elementos cuando son visibles
function mostrarElementos() {
    itemsNosotros.forEach(item => {
        if (esElementoVisible(item)) {
            item.classList.add('mostrar');
        }
    });
}

// Escuchar el evento scroll para activar la función de mostrar elementos
window.addEventListener('scroll', mostrarElementos);

// Llamar a la función para mostrar elementos cuando la página se carga
mostrarElementos();
