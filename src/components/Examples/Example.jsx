import React, { useEffect, useState } from "react";

const Example = () => {
  // const [стан, ф-ція яка змінює стан] = useState(первоначальні дані стану);
  // при зміні стану відбувається ререндер компонента з новими даними
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   console.log("render 1"); // викликається кожного разу при рендері компонента
  // });

  // useEffect(() => {
  //   console.log("render 2"); // викликається один раз при першому рендері компонента
  // }, []);

  // useEffect(() => {
  //   console.log("render 3"); // викликається при зміні стану count та при першому рендері
  // }, [count]);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Example fhfgh</h1>

      <button onClick={() => setVisible(!visible)}>Stan</button>

      {visible && (
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      )}
    </div>
  );
};

export default Example;
