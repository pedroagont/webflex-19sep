import { useState } from 'react';

function Counter(props) {
  //   let count = 0;
  console.log('Rendering!');
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment by 3!</button>
    </div>
  );
}

export default Counter;
