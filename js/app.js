// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos de filtro
    var filterItems = document.querySelectorAll('.experience__filter__item');
    // Selecciona todos los elementos de caja de experiencia
    var postBoxes = document.querySelectorAll('.experience__box');

    // Itera sobre cada elemento de filtro
    filterItems.forEach(function(item) {
        // Agrega un evento click a cada elemento de filtro
        item.addEventListener('click', function() {
            // Obtiene el valor del filtro del atributo 'data-filter' del elemento de filtro actual
            var value = this.getAttribute('data-filer');
            
            // Itera sobre cada caja de experiencia
            postBoxes.forEach(function(box) {
                // Si el valor del filtro es 'all' o la caja de experiencia contiene la clase del filtro seleccionado
                if (value === 'all' || box.classList.contains(value)) {
                    // Muestra la caja de experiencia
                    box.style.display = 'block';
                } else {
                    // Oculta la caja de experiencia si no coincide con el filtro seleccionado
                    box.style.display = 'none';
                }
            });

            // Desactiva el filtro actualmente activo
            filterItems.forEach(function(item) {
                item.classList.remove('active__filter');
            });
            // Activa el filtro seleccionado
            this.classList.add('active__filter');
        });
    });

    // Cambia el estilo del header al hacer scroll
    let header = document.querySelector('header');
    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });
});

// Agrega un evento de escucha para detectar el desplazamiento de la página
window.addEventListener("scroll", function() {
    var menu = document.querySelector('.menu'); // Selecciona el elemento del menú

    // Verifica si la página se ha desplazado más allá de cierta posición
    if (window.scrollY > 0) {
        menu.classList.add('shadow'); // Aplica la clase de sombra al menú
    } else {
        menu.classList.remove('shadow'); // Elimina la clase de sombra del menú si no se desplaza
    }
});
