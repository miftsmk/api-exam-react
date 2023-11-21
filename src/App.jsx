import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Exam from "./components/Exam"
// import Register from "./components/Register"

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exam" element={<Exam/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/register" element={<Register/>}></Route> */}
    </Routes>
  )
}

export default App
