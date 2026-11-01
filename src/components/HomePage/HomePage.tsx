import { useState } from "react";

export const HomePage: React.FC = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="flex flex-col gap-15">
      <h1 className="text-4xl font-bold">React Testing Practice</h1>
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
  );
};
