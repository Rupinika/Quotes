import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Quotes" element={<Home />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
