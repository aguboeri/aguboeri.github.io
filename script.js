// ---------- menu del celular ----------
const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    });
});


// ---------- modo claro / oscuro ----------
const btnTema = document.getElementById('btn-tema');
const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'claro') {
    document.body.classList.add('light-mode');
    btnTema.textContent = '☀️';
}

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        btnTema.textContent = '☀️';
        localStorage.setItem('tema', 'claro');
    } else {
        btnTema.textContent = '🌙';
        localStorage.setItem('tema', 'oscuro');
    }
});


// ---------- proyectos ----------
// los guardo en un arreglo de objetos para no tener que tocar el html
// cada vez que agrego uno nuevo
const proyectos = [
    {
        nombre: 'Juegalo3D',
        tipo: 'Capstone',
        area: 'backend',
        descripcion: 'Backend de 10 microservicios en Spring Boot con Eureka y API Gateway, ' +
                     'mas el diseno de la base de datos. Es lo mas grande que he armado.',
        tecnologias: ['Java', 'Spring Boot', 'Eureka', 'SQL']
    },
    {
        nombre: 'IA aeronautica y baja latencia',
        tipo: 'En investigacion',
        area: 'backend',
        descripcion: 'Estoy leyendo sobre arquitecturas de baja latencia con WebSockets y ' +
                     'mantenimiento predictivo en aviacion. Todavia no hay codigo publico.',
        tecnologias: ['WebSockets', 'Spring Boot']
    },
    {
        nombre: 'Este portafolio',
        tipo: 'Personal',
        area: 'web',
        descripcion: 'El sitio que estas viendo. Los proyectos se cargan desde un arreglo ' +
                     'de objetos y el formulario valida los datos antes de enviar.',
        tecnologias: ['HTML', 'Tailwind', 'JavaScript']
    }
];

const contenedor = document.getElementById('lista-proyectos');
const filtros = document.getElementById('filtros');

// arma el html de una tarjeta
function crearTarjeta(proyecto) {
    let etiquetas = '';

    proyecto.tecnologias.forEach(tecnologia => {
        etiquetas += '<span class="bg-fondo border border-borde rounded px-2 py-0.5 text-verde">' +
                     tecnologia + '</span>';
    });

    return `
        <article class="bg-panel border border-borde rounded-lg p-5">
            <h3 class="font-semibold">${proyecto.nombre}</h3>
            <p class="text-dorado text-sm mb-2">${proyecto.tipo}</p>
            <p class="text-gray-400 text-sm mb-4">${proyecto.descripcion}</p>
            <div class="flex flex-wrap gap-2 text-xs">${etiquetas}</div>
        </article>
    `;
}

// pinta la lista que le pase
function mostrarProyectos(lista) {
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = '<p class="text-gray-500">No hay proyectos en esta categoria.</p>';
        return;
    }

    lista.forEach(proyecto => {
        contenedor.innerHTML += crearTarjeta(proyecto);
    });
}

// deja solo los del area elegida
function filtrar(area) {
    if (area === 'todos') {
        mostrarProyectos(proyectos);
    } else {
        mostrarProyectos(proyectos.filter(p => p.area === area));
    }
}

// botones de filtro
const areas = ['todos', 'backend', 'web'];

areas.forEach(area => {
    const boton = document.createElement('button');
    boton.textContent = area;
    boton.className = 'border border-borde rounded px-3 py-1 text-gray-400 hover:border-verde hover:text-verde capitalize';
    boton.addEventListener('click', () => filtrar(area));
    filtros.appendChild(boton);
});

mostrarProyectos(proyectos);


// ---------- formulario ----------
const formulario = document.getElementById('form-contacto');
const aviso = document.getElementById('aviso');

function correoValido(correo) {
    return correo.includes('@') && correo.includes('.');
}

function avisar(texto, ok) {
    aviso.textContent = texto;
    aviso.className = ok ? 'text-sm text-verde' : 'text-sm text-red-400';
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    const nombre  = document.getElementById('nombre').value.trim();
    const correo  = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '') {
        avisar('Falta tu nombre.', false);
        return;
    }

    if (!correoValido(correo)) {
        avisar('Ese correo no parece valido.', false);
        return;
    }

    if (mensaje.length < 10) {
        avisar('El mensaje es muy corto, escribe al menos 10 caracteres.', false);
        return;
    }

    avisar('Listo, se abrira tu correo.', true);

    const asunto = 'Contacto desde el portafolio - ' + nombre;
    window.location.href = 'mailto:agusboeriaedo@gmail.com' +
                           '?subject=' + encodeURIComponent(asunto) +
                           '&body=' + encodeURIComponent(mensaje);
});
