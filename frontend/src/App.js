import React from 'react';
import LoginForm from './components/LoginForm';
import TeacherList from './components/TeacherList';
import NoteRepository from './components/NoteRepository';

const App = () => (
  <div>
    <h1>ClonFen</h1>
    <LoginForm />
    <TeacherList />
    <NoteRepository />
  </div>
);

export default App;
