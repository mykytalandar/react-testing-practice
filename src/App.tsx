import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="flex flex-col gap-15">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
        <h2 className="text-2xl font-semibold">React Testing Practice</h2>
        <button data-testid="click-btn">Click</button>
        <input
          type="text"
          placeholder="Type here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <h2 className="text-2xl font-semibold" data-testid="value-elem">
          {value}
        </h2>
      </div>
    </div>
  );
}

export default App;
