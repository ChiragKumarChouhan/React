import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      {/* Heading */}
      <div className="flex justify-center pt-20">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg tracking-wide">

        </h1>
      </div>

      {/* Bottom Color Panel */}
      <div className="fixed bottom-10 inset-x-0 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4 bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl px-6 py-4">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-5 py-2 rounded-lg text-black font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setcolor("black")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setcolor("gray")}
            className="outline-none px-5 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setcolor("cyan")}
            className="outline-none px-5 py-2 rounded-lg text-black font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
