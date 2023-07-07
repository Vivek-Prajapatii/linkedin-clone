import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<><Header/><Home/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
