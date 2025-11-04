import './assets/cstm.css'
import React from 'react'
import { useState, useCallback } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [Password, setpassword] = useState("")
  const passgen = useCallback(() => {
    let pass = "";
    let str = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z";
    if (num) str += "0123456789";
    if (char) str += "! @ # $ % ^ & * ( ) _ - + = { } [ ] | \ : ;' < > , . ? / ~ `"
    for (i = 1; i <= array.length; i++) {
      let char = (Math.floor(Math.random() * str.length + 1))
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, num, char, setpassword])
  console.log(Password)
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
        <h3 className="text-4xl text-white">Password Generator</h3>

        <div className="flex shadow rounded-lg overflow-hidden my-4 ">
          <input
            type="text"
            className='outline-none w-full px-3 py-2  bg-white'
            value={Password}
            placeholder="Your Password"
          />
          <button className='text-white bg-blue-500 py-0.5 px-3 outline-none shrink-0 fw-bold cursor-pointer'>COPY</button>
        </div>

        <div className="flex justify-between text-white my-2">
          <input
            type="range"
            min="4"
            max="100"
            value={length}
            className='accent-blue-500 cursor-pointer '
            onChange={(e) => {setlength(e.target.value)}}
          />
          <label> Length : {length}</label>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={num}
              onChange={() => setnum(prev => !prev)}
              className="bg-black hover:bg-white"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
