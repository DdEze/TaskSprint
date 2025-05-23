# TaskSprint 🚀

[![React](https://img.shields.io/badge/react-19.1.0-blue?logo=react&style=flat-square)](https://reactjs.org/)  
[![License](https://img.shields.io/github/license/tu-usuario/tasksprint?style=flat-square)](LICENSE)  
[![Last Commit](https://img.shields.io/github/last-commit/tu-usuario/tasksprint?style=flat-square)](https://github.com/tu-usuario/tasksprint/commits/main)  

## 📋 Descripción

**TaskSprint** es una aplicación web para administrar tus tareas diarias. Con ella puedes crear, filtrar, marcar como completadas y reordenar tareas con drag & drop de manera sencilla y rápida. La persistencia se maneja con LocalStorage, por lo que tus tareas se mantienen entre sesiones.

## 💻 Tecnologías utilizadas

- React 19.1.0
- @hello-pangea/dnd (drag & drop)
- CSS para estilos básicos
- LocalStorage para persistencia de datos

## 🚀 Instalación

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

## 🎯 Uso

* Agrega tareas desde el formulario.

* Usa los filtros para mostrar todas, completadas, pendientes o vencidas.

* Arrastra y suelta tareas para reordenarlas.

* Las tareas se guardan automáticamente en LocalStorage.

## 📦 Estructura del Proyecto

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

## 📃 MIT License

Copyright (c) 2025 [De Dominicis, Ezequiel Anibal]