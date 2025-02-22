import { FaHome, FaHistory, FaChartLine, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  let dispatch = useDispatch();
  
  return (
    <div className="fixed bottom-0 w-full max-w-[620px] bg-white h-14 shadow-lg rounded-t-2xl py-2 px-2 flex justify-between items-center">
      {/* Left Side Icons */}
      <div className="flex justify-between  w-[37%]  px-6">
        <Link to="/">
          <button
            className="text-gray-500 hover:text-[#3fb9c7] transition"
            title="Home"
            onClick={() =>
              dispatch({ type: "HEADING", payload: "Expense Manager" })
            }
          >
            <FaHome className="w-6 h-6" />
          </button>
        </Link>
        <Link to="/transactions">
          <button
            className="text-gray-500 hover:text-[#3fb9c7] transition"
            title="History"
            onClick={() => dispatch({ type: "HEADING", payload: "History" })}
          >
            <FaHistory className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* Floating Add Transaction Button */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2">
        <Link to="/addtransactions">
          <button
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#009eaf] to-[#2dcedf] shadow-md flex items-center justify-center transition transform hover:scale-105"
            onClick={() => {
              dispatch({ type: "HEADING", payload: "Add Transaction" });
              dispatch({ type: "HIDE_NAVBAR", payload: "hide" });
            }}
          >
            <div className="text-white text-3xl font-bold">+</div>
          </button>
        </Link>
      </div>

      {/* Right Side Icons */}
      {/* <div className="flex space-x-20 px-6 "> */}
      <div className="flex justify-between  w-[37%]  px-6">

        <Link to="/budget">
          <button
            className="text-gray-500 hover:text-[#3fb9c7] transition"
            title="Budget"
            onClick={() => dispatch({ type: "HEADING", payload: "Budgets" })}
          >
            <FaEllipsisH className="w-6 h-6" />
          </button>
        </Link>
        <Link to="/insight">
          <button
            className="text-gray-500 hover:text-[#3fb9c7] transition"
            title="Insight"
            onClick={() => dispatch({ type: "HEADING", payload: "Insight" })}
          >
            <FaChartLine className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
