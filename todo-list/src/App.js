import React from 'react';
import './App.css';
import TodosForm from './TodosForm';
import TodosList from './TodosList';

function App() {
  return (
    <div className="App">
     <TodosForm />
     <TodosList />
    </div>
  );
}

export default App;
