import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './cstm.jsx'
createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Hello />
    </>

)
