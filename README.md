# TaskSprint

[![React](https://img.shields.io/badge/react-19.1.0-blue?logo=react&style=flat-square)](https://reactjs.org/)  
[![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/html5-HTML-orange?logo=html5&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/css3-CSS-blue?logo=css3&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&style=flat-square)](https://nodejs.org/)

## Descripción

**TaskSprint** es una aplicación web para administrar tus tareas diarias. Con ella puedes crear, filtrar, marcar como completadas y reordenar tareas con drag & drop de manera sencilla y rápida. La persistencia se maneja con LocalStorage, por lo que tus tareas se mantienen entre sesiones.

## Tecnologías utilizadas

- React 19.1.0
- @hello-pangea/dnd (drag & drop)
- CSS para estilos básicos
- LocalStorage para persistencia de datos

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tasksprint.git
   cd tasksprint

2. Instala las dependencias:
    ```bash
    npm install

3. Inicia la aplicación:
    ```bash
    npm start


La aplicación se abrirá automáticamente en http://localhost:3000.

## Uso

* Agrega tareas desde el formulario.

* Usa los filtros para mostrar todas, completadas, pendientes o vencidas.

* Arrastra y suelta tareas para reordenarlas.

* Las tareas se guardan automáticamente en LocalStorage.

## Estructura del Proyecto

```
/src
  /components
    TaskForm.js
    TaskList.js
    TaskItem.js
  App.js
  styles.css
package.json
README.md
```

## MIT License

Copyright (c) 2025 [De Dominicis, Ezequiel Anibal]