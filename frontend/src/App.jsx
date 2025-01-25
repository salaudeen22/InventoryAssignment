import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "./screen/DashBoard";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
