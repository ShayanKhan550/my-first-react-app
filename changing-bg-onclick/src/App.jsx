import React from "react";
import { useState } from "react";
function App() {
const [bgColor, setBgColor] = useState("white");
  return (
    <>
    <div className="main-div" style={{backgroundColor: bgColor}}>
      <div className="child">
        <button className="child1 common" onClick={() => setBgColor("red")}>Red</button>
        <button className="child2 common"onClick={() => setBgColor("green")}>Green</button>
        <button className="child3 common"onClick={() => setBgColor("blue")}>Blue</button>
        <button className="child4 common"onClick={() => setBgColor("olive")}>Olive</button>
        <button className="child5 common"onClick={() => setBgColor("gray")}>Gray</button>
        <button className="child6 common"onClick={() => setBgColor("yellow")}>Yellow</button>
        <button className="child7 common"onClick={() => setBgColor("lavender")}>Lavender</button>
        <button className="child8 common"onClick={() => setBgColor("white")}>White</button>
        <button className="child9 common"onClick={() => setBgColor("black")}>Black</button>
      </div>
    </div>
    </>
  )
}

export default App
