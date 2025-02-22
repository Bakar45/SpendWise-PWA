import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import Budget from "./Budget";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Budgett = () => {
  let [TotalBudgets, setTotalBudgets] = useState<any>([]);
  let dispatch = useDispatch();
  useEffect(() => {
    const Budgets = JSON.parse(localStorage.getItem("Budgets") as any);
    setTotalBudgets(Budgets);
  }, [useSelector((store: any) => store.Process.Data)]);

  return (
    <div className="flex flex-col  bg-gray-50 p-2 pt-20 pb-24 min-h-screen">
      {/* <div className='h-[20vh] w-[92vw]  ml-[2vw] bg-white px-3 shadow-md flex flex-col justify-around'>
                <div className='mb-1 w-full h-[60px] rounded-md bg-white flex  items-center p-2'>
                    <span className='h-full flex  flex-row'>
                        <span className='px-2'>
                            <div className='text-xl'>All Budgets</div>
                            <div>
                                <span className='text-[#4c948e] text-xl font-bold '>PKR 0</span>
                                <span className=' text-gray-700 '> / 500</span>
                                <div>

                                    <span className=' text-gray-400'>Remaining  Amount:   </span>
                                    <span className='text-black'>200</span>
                                </div>
                            </div>
                        </span>
                    </span>

                </div>
                <ProgressBar
                    completed={50}
                    bgColor="#2bacaa"
                    height="10px"
                    isLabelVisible={false}
                    labelColor="#f2f0f0"
                />
            </div> */}

      <div className="flex items-center justify-between py-8 p-3">
        <span className="text-lg text-gray-500 font-bold">Create Monthly Budget </span>{" "}
        <span>
          <Link to="/createbudget">
            {" "}
            <button
              className="h-[40px] px-4 text-l bg-gray-500 text-white rounded-xl py-1 "
              onClick={() => {
                dispatch({
                  type: "HEADING",
                  payload: "Expense Manager",
                });
              }}
            >
              Create
            </button>{" "}
          </Link>
        </span>
      </div>

      {TotalBudgets.map((obj: any, index: any) => {
        return (
          <Budget
            tname={obj.detail.name}
            total={obj.totalAmount}
            date={obj.date}
            pic={obj.detail.logo}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Budgett;
