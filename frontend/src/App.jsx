import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "./screen/DashBoard";
import Navbar from "./components/Navbar"


function App() {
  return (
    <>

    <Navbar/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
