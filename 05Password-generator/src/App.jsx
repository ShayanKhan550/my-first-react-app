import './assets/cstm.css'
import React from 'react'
import { useState, useCallback ,useEffect , useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [Password, setpassword] = useState("")

  // USE CALLBACK
  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#()_-+={}[]|\$<>,?/~"
    for (let i = 1; i <= length; i++) {
      let chars = (Math.floor(Math.random() * str.length ))
      pass += str.charAt(chars)
    }
    setpassword(pass)

  }, [length, num, char])
  
  // USE EFFECT
  useEffect(() => {
    passgen()
  }, [length, num, char])

  // USE REF
  let passwordRef = useRef(null)
  let copypass = useCallback(() =>{
    window.navigator.clipboard.writeText(Password)
  },[Password])
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
        <h3 className="text-4xl text-white">Password Generator</h3>

        <div className="flex shadow rounded-lg overflow-hidden my-4 ">
          <input
            type="text"
            className='outline-none text-orange-500 w-full px-3 py-2  bg-white'
            value={Password}
            placeholder="Your Password"
            ref={passwordRef}
            readOnly
          />
          <button onClick ={copypass} className='font-medium text-white bg-orange-500  py-0.5 px-3 outline-none shrink-0 fw-bold cursor-pointer'>COPY</button>
        </div>

        <div className="flex justify-between text-white my-2 ">
          <input
            type="range"
            min="8"
            max="40"
            value={length}
            className='accent-orange-500 cursor-pointer '
            onChange={(e) => { setlength(Number(e.target.value)) }}
          />
          <label className='text-orange-500'> Length : {length}</label>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => setnum((prv) => !prv)}
              className="bg-black hover:bg-white"
              id='number'
            />
            <label htmlFor="number" className="text-orange-500">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() =>setchar(prev => !prev)}
              className="bg-black hover:bg-white"
              id='setchar'
            />
            <label htmlFor="setchar" className="text-orange-500">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
