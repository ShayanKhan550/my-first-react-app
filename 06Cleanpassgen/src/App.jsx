import './App.css'
import PageHead from "./components/pageheadtext.jsx";
import Card from "./components/card.jsx"
import { useCallback, useEffect, useState , useRef } from 'react';
function App() {
  const [Length, setLength] = useState(8)
  const [upperchar, setupperchar] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [num, setnum] = useState(false)
  const [Password, setPassword] = useState("")
  const [click , setclick] = useState(false)

 // USE REF HOOK
  const reference= useRef(null)


  // CALLBACK HOOK
  const passgen = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if (upperchar) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (symbols) str += "!@#()_-+={}[]|\$<>,?/~"
    if (num) str += "123456789"
    for (let i = 0; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [Length, upperchar, symbols, num])

  const copy =useCallback(()=>{
    reference.current?.select()
    // it is for defing the range like how much text you wantto copy
    reference.current?.setSelectionRange(0,48)
    window.navigator.clipboard.writeText(Password)

  },[Password])

  // const copy = () =>{
  //   window.navigator.clipboard.writeText(Password)
  //   reference.current?.select()
  // }

  // USE EFFECT HOOK
  useEffect(() => {
    passgen()
  }, [Length, upperchar, symbols, num , click])
  

 
  return (
    <>
      <PageHead h1="" tect="bold" />
      <Card Password={Password}
        Length={Length}
        setLength={setLength}
        setupperchar={setupperchar}
        setsymbols={setsymbols}
        setnum ={setnum}
        regenerate={setclick}
        reference={reference}
        copy = {copy}
      />
    </>
  )
}

export default App
