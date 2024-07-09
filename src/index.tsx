// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';

// 예제용 함수 컴포넌트
const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// React DOM을 사용하여 App 컴포넌트를 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
