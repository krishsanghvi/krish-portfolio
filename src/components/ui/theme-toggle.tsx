import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300 transition-transform hover:scale-110" />
      ) : (
        <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300 transition-transform hover:scale-110" />
      )}
    </Button>
  );
} 