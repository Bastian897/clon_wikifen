# Esquema de Base de Datos (Sequelize)

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE professors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  profile TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE professor_subjects (
  professor_id INTEGER REFERENCES professors(id) ON DELETE CASCADE,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  PRIMARY KEY (professor_id, subject_id)
);

CREATE TABLE evaluations (
  id SERIAL PRIMARY KEY,
  professor_id INTEGER REFERENCES professors(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id), -- puede ser NULL para anónimo
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id), -- opcional
  title VARCHAR(200) NOT NULL,
  content TEXT, -- texto o enlace a archivo
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE revisions (
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(50) NOT NULL,
  row_id INTEGER NOT NULL,
  diff JSONB,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```
