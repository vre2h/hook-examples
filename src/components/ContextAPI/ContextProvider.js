import React, { useState } from "react";
import ContextConsumer from "./ContextConsumer";

const ThemeContext = React.createContext("light");

function ContextProvider() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <p>Choose theme</p>
      <select onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <ThemeContext.Provider value={theme}>
        <ContextConsumer />
      </ThemeContext.Provider>
    </div>
  );
}

export default ContextProvider;
export { ThemeContext };
