import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter , createRoutesFromElements } from "react-router-dom"
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children : [
//             {
//                 path : "",
//                 element : <Home/>
//             },
//             {
//                 path : "about",
//                 element  : <About/>
//             },
//             {
//                 path : "contact",
//                 element : <Contact/>
//             }
//         ]
//     }

// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='git' element={<Github/>}/>
            <Route path='user/:useid/:usename' element={<User/>}/>

        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
