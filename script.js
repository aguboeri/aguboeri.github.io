/* ============================================================
   script.js — Portafolio de Agustín Boeri Aedo
   ------------------------------------------------------------
   Se enlaza desde index.html con:
       <script src="script.js" defer></script>

   El atributo "defer" le dice al navegador: descarga este archivo
   mientras sigues leyendo el HTML, y ejecutalo recien cuando la
   pagina este completa. Sin defer, el script se ejecutaria antes
   de que existan los elementos y getElementById devolveria null.
   ============================================================ */

/* ============================================================
   JAVASCRIPT
   Solo dos funcionalidades, ambas usando el mismo patrón:
   agregar o quitar una clase CSS a un elemento.
   ============================================================ */

/* --- 1. Menú hamburguesa (solo se ve en móvil) --- */
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const enlaces = document.querySelectorAll('.enlace-menu');

btnMenu.addEventListener('click', () => {
    // toggle = si la clase está, la saca; si no está, la pone
    menu.classList.toggle('abierto');
});

// Al tocar cualquier enlace, cerramos el menú
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.remove('abierto');
    });
});

/* --- 2. Cambio de tema oscuro / claro --- */
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    // La clase .light en el <body> reescribe todas las variables de color
    document.body.classList.toggle('light');

    // Cambiamos el ícono del botón según el tema activo
    if (document.body.classList.contains('light')) {
        btnTema.textContent = '☀️';
    } else {
        btnTema.textContent = '🌙';
    }
});
