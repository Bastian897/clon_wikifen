import React, { useEffect, useState } from 'react';

export default function NoteRepository() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/notes').then(r => r.json()).then(setNotes);
  }, []);

  return (
    <div>
      <h2>Apuntes</h2>
      <ul>
        {notes.map(n => (
          <li key={n.id}>{n.title} - {n.subject}</li>
        ))}
      </ul>
    </div>
  );
}
