import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ExtraInfoForSocialaAuthUser from "./Components/ExtraInfoForSocialaAuthUser";
import HomeComponent from "./Components/HomeComponent";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useLayoutEffect } from "react";
import { FireApi } from "./Utils/fireApi";

function App() {
  const { user, handleSetState } = useContext(UserContext);
  console.log({ ...user }, "KAKAKAKAKAKAKAK");

  const fetchData = async () => {
    try {
      const response = await FireApi("user", "GET");
      console.log(response.data, "ajasjdaskdkadaskdkjasd");
      handleSetState(response.data);
      // setdata(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomeComponent />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/addinfo" element={<ExtraInfoForSocialaAuthUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
