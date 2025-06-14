# Ejemplos de Endpoints (Express + Sequelize)

- `POST /api/auth/register` – Registrar usuario.
- `POST /api/auth/login` – Login (opcional).
- `GET /api/professors` – Listar profesores.
- `POST /api/professors` – Crear profesor.
- `PUT /api/professors/:id` – Actualizar profesor.
- `DELETE /api/professors/:id` – Eliminar profesor.
- `GET /api/evaluations/:professorId` – Ver evaluaciones de un profesor.
- `POST /api/evaluations/:professorId` – Crear evaluación.
- `GET /api/notes/subject/:subjectId` – Ver apuntes de una asignatura.
- `POST /api/notes/subject/:subjectId` – Crear apunte.

- `PUT /api/notes/:id` – Actualizar apunte.
- `DELETE /api/notes/:id` – Eliminar apunte.
- `GET /api/subjects` – Listar asignaturas.
- `POST /api/subjects` – Crear asignatura.
- `PUT /api/subjects/:id` – Actualizar asignatura.
- `DELETE /api/subjects/:id` – Eliminar asignatura.
- `GET /api/revisions/:table/:rowId` – Ver historial de una fila.
- `POST /api/revisions/:table/:rowId/rollback/:revId` – Hacer rollback a una revisión.

