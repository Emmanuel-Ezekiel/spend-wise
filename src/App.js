import logo from './logo.svg';
import './App.css';
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
     <>
    <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
    </Routes>
    </>
  );
}

export default App;
