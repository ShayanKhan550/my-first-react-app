import './App.css'
import { use, useState } from 'react'

function App() {

const [dark , setdark] = useState(false)
function handleClick(){
  if(dark === false){
    setdark(true)
  }
  else{
    setdark(false)
  }
}
  return (
    <>

     <div style={{ display: dark ? "none" : "block" }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     </div>
      <button onClick={handleClick}>Dark Theme</button>
    </>
  )
}

export default App
