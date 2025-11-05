import './App.css'
import PageHead from "./components/pageheadtext";
import Card from "./components/card.jsx"
import { use, useCallback, useEffect, useState } from 'react';
function App() {
  const [Length , setLength] = useState(8)
  const [upperchar , setupperchar] = useState(false)
  const [lowerchar , setlowerchar] = useState(false)
  const [symbols , setsymbols] = useState(false)
  const [num , setnum] = useState(false)
  const [Password , setPassword] = useState("")
  const passgen = useCallback(() => {
      let str = ""
      let finalpass = ""
      if(upperchar) str+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(lowerchar) str+= "abcdefghijklmnopqrstuvwxyz"
      if(symbols)   str+= "!@#()_-+={}[]|\$<>,?/~" 
      if(num)       str+= "123456789"

      for(i=0 ; i < Length ; i++){
        let pass = Math.floor(Math.random() * str.length + 1)
        finalpass+= str.charAt(pass)
      }
      setPassword(finalpass)

  } , [Length , upperchar , lowerchar , symbols , num , Password])

  useEffect(() =>{
    passgen()
  } , [Length , upperchar , lowerchar , symbols , num , Password])

  return (
    <>
    <PageHead h1="" tect="bold"/>
    <Card Password = {Password} 
          Length = {Length} 
          setLength = {setLength}/>
    </>
  )
}

export default App
