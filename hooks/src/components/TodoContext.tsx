// src/TodoContext.tsx

import React, { createContext, useReducer, useContext } from 'react';

// Todo 타입 정의
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 액션 타입 정의
type Action = 
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

// 초기 상태
const initialState: Todo[] = [];

// 리듀서 함수
const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error('Unknown action type');
  }
};

// Context 생성
const TodoContext = createContext<{
  state: Todo[];
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

// Provider 컴포넌트
export const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// 커스텀 훅
export const useTodos = () => useContext(TodoContext);