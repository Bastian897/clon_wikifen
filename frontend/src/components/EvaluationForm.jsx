import React, { useState } from 'react';

export default function EvaluationForm({ teacherId }) {
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/api/evaluations/teacher/${teacherId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating, comment }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={rating} onChange={e => setRating(e.target.value)} min="1" max="5" />
      <textarea value={comment} onChange={e => setComment(e.target.value)} />
      <button>Enviar</button>
    </form>
  );
}
