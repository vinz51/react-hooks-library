import React from "react";

const useTest = () => {
  const [increment, setIncrement] = React.useState(0);

  /**
   * @function decrement
   * @description decrement the income until 0
   */
  function decrement() {
    if (increment <= 0) {
      return;
    }

    setIncrement(inc => inc - 1);
  }

  return {
    increment,
    setIncrement: () => setIncrement(inc => inc + 1),
    decrement
  };
};

export default useTest;
