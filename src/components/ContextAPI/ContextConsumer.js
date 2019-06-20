import React, { useContext } from "react";
import { ThemeContext } from "./ContextProvider";

function Counter() {
  const value = useContext(ThemeContext);

  return (
    <div className={value === "light" ? "light-theme" : "dark-theme"}>
      <p>Some text which going to be styled!</p>
    </div>
  );
}

export default Counter;
