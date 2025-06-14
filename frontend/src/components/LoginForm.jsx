import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // call API
    console.log('login', username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="user" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="pass" />
      <button>Login</button>
    </form>
  );
}
