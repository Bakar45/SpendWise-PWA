import React from "react";
import MainGraph from "./MainGraph";
import ExpenseDetail from "./ExpenseDetail";
import IncomeDetail from "./IncomeDetail";
import { useState, useEffect } from "react";

const Insight = () => {
  let [value, setValue] = useState("expense");

  return (
    <div className=" pt-20 pb-24 min-h-screen  flex flex-col bg-gray-50  justify-start items-center">
      <div className="text-lg text-gray-500 font-bold px-1 py-2 w-full">
        {" "}
        Income vs expense
      </div>

      <div className="h-[30vh] w-full bg-white">
        <MainGraph />
      </div>
      <div className="rounded-full h-[6vh] w-[50%] bg-white m-4 flex justify-around items-center">
        <button
          className={`${
            value == "expense" ? "bg-[#3fb9c7] text-white" : ""
          } h-full w-2/4 rounded-full font-[400]`}
          onClick={() => {
            setValue("expense");
          }}
        >
          Expense
        </button>
        <button
          className={`${
            value == "income" ? "bg-[#3fb9c7] text-white" : ""
          } h-full w-2/4 rounded-full font-[400]`}
          onClick={() => setValue("income")}
        >
          Income
        </button>
      </div>

      <div className="w-full">
        {value == "expense" && <ExpenseDetail value={value} />}
        {value == "income" && <IncomeDetail />}
        {}
      </div>
    </div>
  );
};

export default Insight;
