import Home from "./components/Home"
import Input from "./components/Input"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <Router>
    <>
    <Navbar />

    <Routes>

    <Route index path="/home" element={<Home />} />

    <Route path="/input" element={<Input />} />

    </Routes>
    </>
    </Router>
  )
}

export default App
