import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/old/Home"
import Login from "./components/old/Login"
import Register from "./components/old/Register"

function App() {
  
  return (
    <div className="bg-slate-100 min-h-screen">
      <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="https://mift.xyz/">Mift</a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="block rounded py-2 pr-4 pl-3 text-white">Home</Link>
              </li>
              <li>
                <Link to="/login" className="block rounded py-2 pr-4 pl-3 text-white">Login</Link>
              </li>
              <li>
                <Link to="/register" className="block rounded py-2 pr-4 pl-3 text-white">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
