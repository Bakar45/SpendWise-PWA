import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import PieChart from "./PieChart";
import Card from "./Card";
import Total from "./Total";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: "HEADING",
      payload: "Expense Manager",
    });
    dispatch({
      type: "SHOW_NAVBAR",
    });
  }, [location]);

  useEffect(() => {
    const B = localStorage.getItem("Budgets");
    if (!B) {
      localStorage.setItem("Budgets", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const G = localStorage.getItem("Graphdata");
    if (!G) {
      localStorage.setItem("Graphdata", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const T = localStorage.getItem("Transactions");
    if (!T) {
      localStorage.setItem("Transactions", JSON.stringify([]));
    }
  }, []);

  const [totalTransaction, setTotalTransaction] = useState<any>([]);
  const [totalRupee, setTotalRupee] = useState<number>(0);
  const [expenseRupee, setExpenseRupee] = useState<number>(0);
  const [incomeRupee, setIncomeRupee] = useState<number>(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Transactions") as any) || [];
    setTotalTransaction(data);

    let total = 0;
    let income = 0;
    let expense = 0;

    data.forEach((d: any) => {
      if (d.type === "income") {
        total += +d.value;
        income += +d.value;
      } else {
        total -= +d.value;
        expense += +d.value;
      }
    });

    setTotalRupee(total);
    setIncomeRupee(income);
    setExpenseRupee(expense);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-3 max-w-[620px] mx-auto w-full px-4">
      <Total
        total={totalRupee}
        totalIncome={incomeRupee}
        totalExpense={expenseRupee}
      />

      {/* Pie Chart Section */}
      <div className="p-6 w-full bg-white shadow-md border rounded-lg">
        <div className="font-bold text-gray-600 text-lg mb-3 text-left pl-4">
          Your Monthly Expense
        </div>

        <div className="flex flex-col items-center  justify-center">
          <div className="w-full max-w-[500px] h-[300px] flex items-center justify-center">
            <PieChart totalExpense={expenseRupee} />
          </div>
          <p className="mt-2 text-gray-700 font-2xl text-bold text-center">
            This month you spent PKR {expenseRupee}
          </p>
          <Link
            to="/insight"
            className="text-gray-400 mt-2 hover:underline text-center"
          >
            Expense Details
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="text-xl font-bold text-gray-700 text-left w-full pl-4">
        Recent Transactions
      </div>

      <div className="w-full">
        {totalTransaction
          .slice(-5)
          .reverse()
          .map((transaction: any, index: number) => (
            <Card
              key={index}
              tname={transaction.detail.name}
              payment={transaction.Payment}
              amount={transaction.value}
              date={transaction.Date}
              pic={transaction.detail.logo}
              typee={transaction.type}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
