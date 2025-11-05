import './App.css'
import PageHead from "./components/pageheadtext.jsx";
import Card from "./components/card.jsx"
import { use, useCallback, useEffect, useState } from 'react';
function App() {
  const [Length, setLength] = useState(8)
  const [upperchar, setupperchar] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [num, setnum] = useState(false)
  const [Password, setPassword] = useState("")
  const [click , setclick] = useState(false)
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

  useEffect(() => {
    passgen()
  }, [Length, upperchar, symbols, num , click])
  console.log(upperchar)
  return (
    <>
      <PageHead h1="" tect="bold" />
      <Card Password={Password}
        Length={Length}
        setLength={setLength}
        setupperchar={setupperchar}
        setsymbols={setsymbols}
        setnum ={setnum}
        passgen={setclick}
      />
    </>
  )
}

export default App
