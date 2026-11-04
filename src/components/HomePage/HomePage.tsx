import { MousePointerClick, Pencil } from "lucide-react";
import { useState } from "react";
import image from "../../assets/hero.png";

export const HomePage: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <span className="w-fit font-semibold py-[5px] px-[15px] rounded-[16px] bg-surface border border-solid border-border">
            Practice Project
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight">
            React <span className="text-primary-purple">Testing</span> Practice
          </h1>
          <p className="text-secondary-text">
            A small app to practice testing with Vitest, React Testing Library
            and Playwright
          </p>
        </div>

        <img src={image} alt="Image" className="w-[200px] h-[200px]" />
      </div>
      <div className="flex flex-col gap-[18px]">
        <button
          data-testid="click-btn"
          className="
          flex justify-center items-center gap-2
          p-2 w-[100px] 
          bg-linear-to-bl from-primary-hover to-accent-purple
          rounded-[10px] text-white font-semibold 
          hover:from-accent-purple hover:to-accent-purple
          transition-colors ease-in-out duration-300"
        >
          <MousePointerClick />
          Click
        </button>
        <label htmlFor="type-input" className="w-[300px] relative">
          <input
            id="type-input"
            type="text"
            placeholder="Type something..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="
            w-full p-2 pl-[30px] text-primary-text bg-input-bg  
            border border-solid border-border rounded-[10px]
            focus:outline-2 focus:outline-primary-purple"
          />
          <Pencil size={16} className="absolute top-[14px] left-[8px]" />
        </label>
        <div className="w-[300px] p-3 flex row bg-surface rounded-[10px] border border-solid border-border">
          <span>You typed: </span>
          <p className="font-semibold" data-testid="value-elem">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
