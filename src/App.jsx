import React, { useState } from "react";
import './index.css';

function App() {
  const [initial, setInitial] = useState(0);
  const [boxes, setBoxes] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });


  const handleInit = () => {
    setBoxes({  
      A: initial,
      B: initial * 2,
      C: initial * 4,
      D: initial * 8,
    });
  };

  const choice1 = () => {
    setBoxes((prev) => ({
      A: prev.A * 2,
      B: prev.B * 2,
      C: prev.C * 2,
      D: prev.D * 2,
    }));
  };

  const choice2 = () => {
    setBoxes((prev) => ({
      A: 0,
      B: prev.A,
      C: 0,
      D: prev.B,
    }));
  };

  const choice3=()=>{
    setBoxes((prev)=>({
      A: 0,
      B: prev.B + prev.A,
      C: 0,
      D: prev.D + prev.C,
    }));
  };

  return (
    <div className="container">
      <h1>Box and Balls</h1>

      <input
      className="in"
        type="number"
        value={initial}
        onChange={(e) => setInitial(Number(e.target.value))}
      />
      <button onClick={handleInit}>Initialize</button>

      <div style={{ margin: "20px" }}>
        <p>Violet: {boxes.A}</p>
        <p>Orange: {boxes.B}</p>
        <p>Green: {boxes.C}</p>
        <p>White: {boxes.D}</p>
      </div>

      <div>
        <button onClick={choice1}>Choice 1</button>
        <button onClick={choice2}>Choice 2</button>
        <button onClick={choice3}>Choice 3</button>
      </div>
    </div>
  );
}

export default App;
