// src/App.tsx

import React from 'react';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;