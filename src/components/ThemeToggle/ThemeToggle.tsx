import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="flex justify-center w-[50px] p-1 rounded-[20px] border border-solid border-border bg-surface"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
};
