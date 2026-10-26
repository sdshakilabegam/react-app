import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h3>Counter</h3>
      <p className="count">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
