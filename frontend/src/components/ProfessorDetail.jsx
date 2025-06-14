import React, { useEffect, useState } from 'react';

export default function ProfessorDetail({ id }) {
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    fetch(`/api/professors/${id}`)
      .then(res => res.json())
      .then(data => setProfessor(data));
  }, [id]);

  if (!professor) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{professor.name}</h2>
      <p>{professor.profile}</p>
    </div>
  );
}
