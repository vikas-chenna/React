import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState(null);


  const passwordRef = useRef();

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+~/=-";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, characterAllowed, setPassword, length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-black w-full h-screen ">
        <div className="bg-gray-500 w-[40%] h-[200px] rounded-4xl relative left-150 top-50">
          <h1 className="text-center text-4xl relative top-2">
            Password Generator
          </h1>
          <input
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            className="bg-transparent border-2 border-black rounded-l-2xl p-2 w-150 mt-10 ml-8 outline-none"
          />
          <button className="p-2.5 bg-red-600 w-25 rounded-r-2xl  ml-1 text-[17px] hover:bg-red-700"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
          <div className="mt-6 ml-10 text-[25px]">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="rangeSlider" className="pr-5 pl-1">
              Length {length}
            </label>

            <input
              type="checkbox"
              id="character"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character" className="pr-5 pl-2">
              Character
            </label>
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number" className="pr-2 pl-2">
              Number
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
