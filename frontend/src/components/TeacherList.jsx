import React, { useEffect, useState } from 'react';

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('/api/teachers').then(r => r.json()).then(setTeachers);
  }, []);

  return (
    <div>
      <h2>Profesores</h2>
      <ul>
        {teachers.map(t => (
          <li key={t.id}>{t.name} - promedio: {t.Evaluations?.reduce((a, e) => a + e.rating, 0) / (t.Evaluations?.length || 1)}</li>
        ))}
      </ul>
    </div>
  );
}
