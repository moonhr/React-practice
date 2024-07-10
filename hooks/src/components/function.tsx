import React, { useState, useEffect } from 'react';

//컴포넌트 타입 지정: 함수형 컴포넌트의 타입을 React.FC로 지정
const Counter: React.FC = () => {
  //상태 타입 지정: useState 훅에서 상태의 타입을 지정
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Coin : {count}</h1>
      <button onClick={increment}>돈벌기</button>
    </div>
  );
}

export default Counter;