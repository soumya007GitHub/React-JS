import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  let [pwd, setPwd] = useState("");
  let [range, setRange] = useState(8);
  let [isLetters, setIsLetters] = useState(true);
  let [isNumbers, setIsNumbers] = useState(false);

  let generatePassword = useCallback(()=>{
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let charSet = "";
    if(isLetters) charSet += letters;
    if(isNumbers) charSet += numbers;
    if(charSet.length == 0) return "";
    let pwd = "";
    for(let i = 0; i<range; ++i){
    pwd += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return pwd;
  }, [range, isLetters, isNumbers]);

  useEffect(() => {
    const newPassword = generatePassword();
    setPwd(newPassword);
  }, [generatePassword]);

  function copyPassword(){
    navigator.clipboard.writeText(pwd);
    inputField.current.focus();
  }
  const inputField = useRef(null);

  return (
    <div className="body w-full h-screen">
      <div className="container w-full h-screen flex justify-center items-center">

        <div className="form bg-green-800 p-4 rounded-md space-y-4">
          <input
            type="text"
            id="password"
            name="password"
            className="bg-slate-500 text-white p-4 w-full rounded-md focus:bg-blue-100 focus:text-black"
            value={pwd}
            readOnly
            ref={inputField}
          />

          <div className="options flex flex-wrap justify-evenly items-center gap-5 text-white">
            <input
              type="range"
              id="characters"
              name="characters"
              min="0"
              max="16"
              onChange={(e) => setRange(e.target.value)}
              value={range}
              className="bg-slate-300"
            />
            <label htmlFor="characters">Length - {range}</label>

            <input
              type="checkbox"
              id="letters"
              checked={isLetters}
              onChange={() => setIsLetters(!isLetters)}
            />
            <label htmlFor="letters">Letters</label>

            <input
              type="checkbox"
              id="numbers"
              checked={isNumbers}
              onChange={() => setIsNumbers(!isNumbers)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <button className='bg-blue-900 text-white border rounded-md p-4 w-full' 
          onClick={
            ()=>{
              copyPassword(); 
              inputField.current.select();
            }
          }>Copy</button>
        </div>


      </div>
    </div>
  );
}

export default App;
