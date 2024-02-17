const itemsNosotros = document.querySelectorAll('.item-nosotros');

function esElementoVisible(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

function mostrarElementos() {
    itemsNosotros.forEach(item => {
        if (esElementoVisible(item)) {
            item.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarElementos);

mostrarElementos();
