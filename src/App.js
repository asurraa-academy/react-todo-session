import { useState } from "react";
import "./App.css";
import { MyLogo } from "./components/logo";
import { MyText } from "./components/text";

const myLove = () => {
  const a = "hi";
  const b = () => "hi";
  return [a, b];
};

function App() {
  const age = 19;

  const [myAge, setMyAge] = useState(19);

  return (
    <div className="App">
      <header className="App-header">
        <MyLogo />
        <MyText />
        <h1>{age}</h1>
        <h1>{myAge}</h1>
        <button
          onClick={() => {
            setMyAge(age + 1);
          }}
        >
          add my age
        </button>
      </header>
    </div>
  );
}

export default App;
