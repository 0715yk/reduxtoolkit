import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Test } from "./features/counter/Test";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Test />
      </header>
    </div>
  );
}

export default App;
