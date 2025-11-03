import CARD from "./components/CARD"

function App() {
  let obg ={
    name :"Shayan",
    age:"18"
  }
  let object = [{
    name: "Ali",
    age: 20,
    class: "BSCS",
    cgpa: 3.5
  },
  {
    name: "Ahmed",
    age: 22,
    class: "BSIT",
    cgpa: 3.8
  },
  {
    name: "Ayesha",
    age: 19,
    class: "BSSE",
    cgpa: 3.9
  },
  {
    name: "Sara",
    age: 21,
    class: "BSCE",
    cgpa: 3.6
  }
]

  return (
    <>
      <div className="centerdiv">
        <div className=" bg-green-400 mb-4 p-4 rounded-lg text-center fw-bold w-50">
          <h3 className="text-3xl">React card </h3>
        </div>
        <CARD text="LOGIN" obg2 = {obg} data = {object} nm = "shayan"/>
      
      
      
      
      
      </div>
    </>
  )
}

export default App
