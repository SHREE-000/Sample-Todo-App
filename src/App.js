import "./App.css";
import Login from "./components/Login";
import Todolist from "./components/Todolist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
