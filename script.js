// menu del celular
const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

// cerrar el menu al tocar un link
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    });
});
