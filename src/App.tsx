import React from "react";
import "./App.css";
import "./index.css";
import Frontscreen from "./components/Frontscreen";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import History from "./components/History";
import Budgett from "./components/Budgett";
import Insight from "./components/Insight";
import AddTranscation from "./components/AddTranscation";
import CreateBudget from "./components/CreateBudget";
import Calculator from "./components/Calculator";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";

function App() {
  let show = useSelector((store: any) => store.Process.showNavbar);

  return (
    <div className="flex justify-center items-center h-full ">
      <div className="max-w-[620px] w-full  min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Frontscreen />} />
          <Route path="/transactions" element={<History />} />
          <Route path="/budget" element={<Budgett />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/addtransactions" element={<AddTranscation />} />
          <Route path="/createbudget" element={<CreateBudget />} />
          {/* <Route path="/calculator" element={<Calculator />} /> */}
        </Routes>
        {show !== "hide" && <Navbar />}
      </div>
    </div>
  );
}
export default App;
