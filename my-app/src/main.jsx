import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './cstm.jsx'

// function Apps(){
//     return(<div><h1>i am custom react app inside main functon </h1></div>)
// }
// const reactElement = React.createElement(
//     'a',
//     {href:'https://www.google.com',
//     target:'_blank',
//     },
//     'click me to visit google'

// )
    
const anotherElement =(
     <a href='https://www.google.com' >i am another element</a>
)
createRoot(document.getElementById('root')).render(
//   reactElement
   anotherElement
)  
  