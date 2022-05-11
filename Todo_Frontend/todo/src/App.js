import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
    </>
  );
}

export default App;
