import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Exam from "./components/Exam"
import FinishExam from "./components/FinishExamPage"
import LoadingPage from "./components/LoadingPage"
// import Register from "./components/Register"

function App() {
  const [checkStore, setCheckStore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [isValid, setIsValid] = useState(false);

  // const readLocalStorage = async (key) => {
  //   return new Promise((resolve, reject) => {
  //     localStorage.getItem([key], function (result) {
  //       if (result[key] === undefined) {
  //         reject();
  //       } else {
  //         resolve(result[key]);
  //       }
  //     });
  //   });
  // };
  // localStorage.setItem('exam_token_','123');
  useEffect(() => {
    if (!checkStore && !isLoading && token == null && !isValid) {
      try {
      const tokenStore = localStorage.getItem('exam_token_');
      if (tokenStore !== null) {
        console.log(tokenStore)
      }
        // console.log(tokenStore)
        // await 
      } catch (e) {
          console.log(e);
      }
      setCheckStore(true)
      setIsLoading(true)
    }
  }, []);

  // if (!checkStore && !isLoading) {
  //   try {
  //   const tokenStore = await readLocalStorage('exam_token_');
  //     console.log(tokenStore)
  //     // await 
  //   } catch (e) {
  //       console.log(e);
  //   }
  //   setIsLoading(true)
  // }
  
  return (
    <>
    { !isLoading && 
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exam" element={<Exam/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/finish" element={<FinishExam/>}></Route>
        {/* <Route path="/l" element={<L/>}></Route> */}
        {/* <Route path="/register" element={<Register/>}></Route> */}
    </Routes> }
    { isLoading && 
      <LoadingPage />
    }
    </>
  )
}

export default App
