import { useState } from "react";

const useCounter = () => {
  const [value, setState] = useState(0);
  const increment = () => setState(value + 1);

  return {value, increment};
}

// Optimized for expensive function
// const useCounter = () => {
//   const [value, setState] = useState(0);
//   const increment = useCallback(() => setState(value + 1), [value]);

//   return {value, increment};
// }


export const Counter = () => {
  const {increment, value} = useCounter();

  return <button onClick={increment}>Counted {value}</button>;
}
