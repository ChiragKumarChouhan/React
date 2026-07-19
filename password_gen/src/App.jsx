import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8); //fixed a length to 8
  const [numberAllowed, setNumberAllowed] = useState(false);//set the default value to false for numbers
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //use ref hook
  const passwordRef = useRef(null)


  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "1@#$%^&*_";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)

  },
    [password])
  useEffect(() => {

    // passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])
  return (
    <>
      <div className="w-full max-w-md mx-auto mt-20 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Password Generator
        </h1>

        <div className="flex shadow-lg rounded-xl overflow-hidden border border-gray-300">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-3 text-lg outline-none bg-gray-50 text-gray-800"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white  hover:bg-sky-700 '>

            copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);


              }}

            >

            </input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);// ! used to change previus false into true


              }}

            >

            </input>
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
