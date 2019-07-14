import React, { useState } from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";
import Todos from "./components/Todos";
import DidWillMountHook from "./components/DidWillMountHook";
import ContextProvider from "./components/ContextAPI/ContextProvider";
import FakeFetch from "./components/FakeFetch";

import "./styles.css";

function App() {
  const [randomProp, setRandomProp] = useState("");

  return (
    <div className="App">
      <div>
        <h2>#1 App: Use State</h2>
        <Counter />
      </div>
      <div>
        <h2>#2 App: Use State</h2>
        <Todos />
      </div>
      <div>
        <h2>#3 App: Use Effect</h2>
        <input
          placeholder="Some Random Prop"
          value={randomProp}
          onChange={e => setRandomProp(e.target.value)}
        />
        <DidWillMountHook
          randomProp={randomProp}
          randomPropOfComplexType={{ randomProp: "wow" }}
        />
      </div>
      <div>
        <h2>#4 App: Context API</h2>
        <ContextProvider />
      </div>
      <div>
        <h2>#5 App: Fake Fetch</h2>
        <FakeFetch />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
