import React from "react";

interface Props {
  total: number;
  totalIncome: number;
  totalExpense: number;
}

const Total = ({ total, totalExpense, totalIncome }: Props) => {
  return (
    <div className="w-full mt-2 max-w-[620px] bg-white shadow-md border rounded-xl py-4 px-8 flex flex-col gap-2">
      {/* Heading */}
      <div className="font-bold font-mono text-gray-700 text-lg">What You Have</div>
      
      {/* Total Amount */}
      <div className="text-2xl font-bold font-mono text-[#3fb9c7]">PKR {total}</div>

      {/* Income, Expense, and Savings */}
      <div className="flex justify-between">
        <div className="h-[60px] w-[100px] border-2 rounded-xl flex flex-col items-center justify-center p-1">
          <div className="text-sm font-semibold text-gray-600">Income</div>
          <div className="text-xs text-[#3fa5b3] mt-1">PKR {totalIncome}</div>
        </div>
        <div className="h-[60px] w-[110px] border-2 rounded-xl flex flex-col items-center justify-center p-1">
          <div className="text-sm font-semibold text-gray-600">Expense</div>
          <div className="text-sm text-[#e95454] mt-1">PKR {totalExpense}</div>
        </div>
        {/* <div className="h-[60px] w-[110px] border-2 rounded-xl flex flex-col items-center justify-center p-1">
          <div className="text-sm font-semibold text-gray-600">Savings</div>
          <div className="text-sm text-[#12abbe] mt-1">PKR {totalIncome - totalExpense}</div>
        </div> */}
      </div>
    </div>
  );
};

export default Total;
