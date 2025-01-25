import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "./screen/DashBoard";
import Navbar from "./components/Navbar"
import AllItem from "./screen/AllItem";


function App() {
  return (
    <>

    <Navbar/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/AllItem" element={<AllItem/>}/>
      </Routes>
    </>
  );
}

export default App;
