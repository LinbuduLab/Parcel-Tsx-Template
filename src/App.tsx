import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => { }, []);

  return (
    <>
      <h1> {count}</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click to add count!
      </button>
    </>
  );
};

export default App;
