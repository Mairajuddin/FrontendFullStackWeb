import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ExtraInfoForSocialaAuthUser from "./Components/ExtraInfoForSocialaAuthUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addinfo" element={<ExtraInfoForSocialaAuthUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
