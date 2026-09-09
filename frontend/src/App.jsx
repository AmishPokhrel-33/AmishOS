import { Route, Routes } from "react-router-dom"
import Landing from "./pages/landing"
import Home from "./pages/Home"

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/os" element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App