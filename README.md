# Portafolio — Agustín Ignacio Boeri Aedo

Portafolio web personal. Sitio estático, sin frameworks ni librerías externas:
HTML5, CSS3 y JavaScript puro.

## Estructura

```
portafolio-aguboeri/
├── index.html      Estructura y contenido
├── style.css       Estilos, variables de color y responsive
├── script.js       Menú móvil y cambio de tema
└── assets/
    └── perfil.jpg  Foto de perfil (400×400)
```

## Decisiones técnicas

- **Variables CSS** (`:root` + `body.light`) para manejar los dos temas
  desde un solo lugar, sin duplicar reglas.
- **`repeat(auto-fit, minmax(...))`** en las grillas, para que las columnas
  se acomoden solas sin media queries adicionales.
- **`clamp()`** en el título principal: escala con el ancho de la pantalla
  entre un mínimo y un máximo.
- **`defer`** en el script, para que el DOM exista antes de ejecutarlo.
- **`width` y `height`** declarados en la imagen, para reservar el espacio
  y evitar saltos de maquetación durante la carga.

## Ejecución local

No requiere servidor ni instalación. Abrir `index.html` en cualquier
navegador, o usar un servidor local durante el desarrollo.

## Autor

Agustín Ignacio Boeri Aedo — Ingeniería en Informática, Duoc UC.
