// src/TodoList.tsx

import React, { useState, useCallback, useMemo } from 'react';
import { useTodos } from './TodoContext';

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  // 새로운 Todo를 추가하는 함수
  const addTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  }, [newTodo, dispatch]);

  // 컴포넌트의 성능 최적화를 위해 useMemo를 사용하여 완료된 Todo 개수 계산
  const completedCount = useMemo(() => state.filter(todo => todo.completed).length, [state]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <p>Completed: {completedCount}</p>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;