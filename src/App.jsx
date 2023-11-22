import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Exam from "./components/Exam"
import FinishExam from "./components/FinishExamPage"
import L from "./components/LoadingPage"
// import Register from "./components/Register"

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exam" element={<Exam/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/finish" element={<FinishExam/>}></Route>
        <Route path="/l" element={<L/>}></Route>
        {/* <Route path="/register" element={<Register/>}></Route> */}
    </Routes>
  )
}

export default App
