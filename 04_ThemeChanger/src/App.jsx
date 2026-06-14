import { useState } from "react";
import "./App.css";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import { useEffect } from "react";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const clsAdd = document.querySelector("html");
    clsAdd.classList.remove("light", "dark");
    clsAdd.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="p-4 bg-gray-700 text-4xl text-white text-center">
        Vikas chenna
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
