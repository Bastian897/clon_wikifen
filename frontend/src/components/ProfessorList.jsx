import React, { useEffect, useState } from 'react';

export default function ProfessorList() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    fetch('/api/professors')
      .then(res => res.json())
      .then(data => setProfessors(data));
  }, []);

  return (
    <ul>
      {professors.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
