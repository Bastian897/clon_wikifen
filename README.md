# ClonFen
ClonFen es una aplicación web tipo wiki inspirada en Wikifen para estudiantes de la FEN de la Universidad de Chile. El proyecto incluye un backend en Node.js/Express con Sequelize y un frontend minimal en React.

## Estructura de Carpetas

```
backend/
  app.js            # servidor Express
  config/
    config.js       # datos de conexión a la base
  models/           # definiciones Sequelize
  routes/           # endpoints REST
  controllers/      # lógica de cada entidad
frontend/
  public/index.html # HTML principal
  src/App.js        # app React
  src/components/   # componentes varios
 docs/
  database_schema.sql # esquema SQL de referencia
```

## Ejemplos de Endpoints

- `POST /api/auth/register` – registro de usuarios
- `POST /api/auth/login` – inicio de sesión
- `GET /api/teachers` – lista de profesores con evaluaciones
- `POST /api/teachers` – crear profesor
- `GET /api/notes` – listar apuntes
- `POST /api/evaluations/teacher/:id` – evaluar profesor

## Esquema de Base de Datos

El archivo [`docs/database_schema.sql`](docs/database_schema.sql) describe las tablas principales: usuarios, profesores, apuntes, evaluaciones e historial de cambios.

## Frontend

El frontend incluye componentes simples de React que consumen los endpoints anteriores. Para un ejemplo mínimo revisa [`frontend/src/App.js`](frontend/src/App.js).

Este proyecto es un ejemplo de clon minimal de Wikifen. Contiene un backend en Node.js/Express con Sequelize y un frontend en React.

Consulta los documentos en `docs/` para el esquema de base de datos, la estructura de carpetas y ejemplos de endpoints.

## Uso rápido

1. Instala dependencias en `backend` y `frontend` con `npm install`.
2. Ejecuta `node app.js` dentro de `backend` para iniciar la API.
3. En otro terminal corre tu aplicación de React (por ejemplo con Vite o similar) para consumir los endpoints.

