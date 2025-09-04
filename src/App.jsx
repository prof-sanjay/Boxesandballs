import React, { useState } from "react";

function App() {
  const [initial, setInitial] = useState(1);
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

  const handleChoice1=()=>{
    setBoxes((prev)=>({
      A: prev.A*2,
      B: prev.B*2,
      C: prev.C*2,
      D: prev.D*2,
    }));
  };

  const handleChoice2=()=>{
    setBoxes((prev)=>({
      A: 0,
      B: 0,
      C: 0,
      D: prev.A+prev.B+prev.C+prev.D,
    }));
  };

  const handleChoice3=()=>{
    setBoxes((prev)=>({
      A: 0,
      B: prev.B+prev.A,
      C: 0,
      D: prev.D+prev.C,
    }));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ball Game</h1>

      <div className="mb-4">
        <input
          type="number"
          value={initial}
          onChange={(e) => setInitial(Number(e.target.value))}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={handleInit}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Initialize
        </button>
      </div>
      <div className="space-x-2 mb-4">
        <button
          onClick={handleChoice1}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Choice 1 (Double)
        </button>
        <button
          onClick={handleChoice2}
          className="bg-yellow-500 text-black px-3 py-1 rounded"
        >
          Choice 2 (Empty & Push Last)
        </button>
        <button
          onClick={handleChoice3}
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Choice 3 (Odd → Even)
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl text-white" style={{ background: "violet" }}>
          <h2 className="font-bold">Box A (Violet)</h2>
          <p>{boxes.A} balls</p>
        </div>
        <div className="p-4 rounded-xl text-white" style={{ background: "orange" }}>
          <h2 className="font-bold">Box B (Orange)</h2>
          <p>{boxes.B} balls</p>
        </div>
        <div className="p-4 rounded-xl text-white" style={{ background: "green" }}>
          <h2 className="font-bold">Box C (Green)</h2>
          <p>{boxes.C} balls</p>
        </div>
        <div className="p-4 rounded-xl text-black" style={{ background: "white" }}>
          <h2 className="font-bold">Box D (White)</h2>
          <p>{boxes.D} balls</p>
        </div>
      </div>
    </div>
  );
}
export default App