import React from "react";
import { useState } from "react";
function App() {
  const [bgcolor , setbgcolor] = useState();
  return (
    <>
      <div className="main-div" style={{background : bgcolor}}>
        <div className="child">
          <button className="child1 common" onClick={() => setbgcolor("red")}>RED</button>
          <button className="child2 common" onClick={() => setbgcolor("green")}>GREEN</button>
          <button className="child3 common"onClick={() => setbgcolor("blue")}>BLUE</button>
          <button className="child4 common"onClick={() => setbgcolor("olive")}>OLIVE</button>
          <button className="child5 common"onClick={() => setbgcolor("pink")}>PINK</button>
          <button className="child6 common"onClick={() => setbgcolor("Yellow")}>YELLOW</button>
          <button className="child7 common"onClick={() => setbgcolor("lavender")}>LAVENDER</button>
          <button className="child8 common"onClick={() => setbgcolor("white")}>WHITE</button>
          <button className="child9 common"onClick={() => setbgcolor("black")}>BLACK</button>
        </div>
      </div>
    </>
  )
}

export default App
