import React, { useReducer } from "react";

// Todo 아이템의 타입을 정의
type Todo = {
  id: number; // 각 Todo 아이템의 고유 ID
  text: string; // Todo 아이템의 내용
};

// 상태의 타입을 Todo 배열로 정의
type State = Todo[];

// 액션의 타입을 정의
type Action =
  | { type: "ADD_TODO"; payload: string } // 새로운 Todo를 추가하는 액션
  | { type: "REMOVE_TODO"; payload: number }; // 특정 Todo를 제거하는 액션

// 초기 상태로 빈 배열을 설정
const initialState: State = [];

// 리듀서 함수 정의
// 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      // 'ADD_TODO' 액션일 경우, 새로운 Todo 아이템을 추가한 상태를 반환
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      // 'REMOVE_TODO' 액션일 경우, 해당 ID의 Todo 아이템을 제거한 상태를 반환
      return state.filter((todo) => todo.id !== action.payload);
    default:
      // 정의되지 않은 액션의 경우, 현재 상태를 그대로 반환
      return state;
  }
};

function TodoApp() {
  // useReducer를 사용하여 상태와 디스패치 함수 설정
  const [todos, dispatch] = useReducer(reducer, initialState);

  // 새로운 Todo 입력을 위한 상태 관리
  const [newTodo, setNewTodo] = React.useState<string>("");

  // Todo 아이템을 추가하는 함수
  const handleAddTodo = () => {
    // 입력값이 비어 있지 않으면 디스패치로 ADD_TODO 액션을 호출
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo(""); // 입력 필드 초기화
    }
  };

  return (
    <div>
      {/* 새로운 Todo를 입력받는 인풋 필드 */}
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      {/* 입력된 Todo를 추가하는 버튼 */}
      <button onClick={handleAddTodo}>Add</button>
      {/* Todo 목록을 렌더링 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* Todo 아이템을 제거하는 버튼 */}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
