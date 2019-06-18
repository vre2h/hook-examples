import React, { useState, useEffect } from "react";

function Counter({ randomProp, randomPropOfComplexType }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs after each re-render!");
  });

  useEffect(() => {
    console.log("Effect runs on did and will Mounts!");
  }, []);

  useEffect(() => {
    console.log("Effect runs only when prop changed 1");
  }, [randomProp]);

  useEffect(() => {
    console.log("Effect runs only on each prop change!");
  }, [randomPropOfComplexType]);

  useEffect(() => {
    console.log(
      "Effect runs only when randomPropOfComplexType.randomProp changed 2"
    );
  }, [randomPropOfComplexType.randomProp]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
