import { useState } from "react";
import Expense from "./Expense";
// import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const AddTranscation = () => {
  let [Category, setCategory] = useState<string>("expense");

  const dispatch = useDispatch();

  return (<div className="h-screen bg-[#f5f5fa] ">

    <div className="min-h-[90vh] pt-20 pb-2 px-3 flex flex-col justify-around ">
      <div className="flex ">
        <div className="aboslute w-[9vw] sm:h-[4vh] md:h-[4vh]  lg:h-[5vh]  active:bg-[#3fb9c7] border rounded-full flex items-center justify-center lg:w-[40px] md:w-[30px] sm-[25px]">
          <Link to="/">
            <img
              src="/arroww.png"
              className="w-full"
              onClick={() => {
                dispatch({
                  type: "SHOW_NAVBAR",
                });
                dispatch({
                  type: "HEADING",
                  payload: "Expense Manager",
                });
              }}
            ></img>
          </Link>
        </div>

        <div className="flex justify-around w-full ">
          <button
            className={`${
              Category == "expense" ? "selected" : "notselect"
            }  sm:h-[4vh] md:h-[4vh]  lg:h-[5vh] w-[40%] rounded-full flex items-center justify-center border-2 border-[#3fb9c7]`}
            onClick={() => {
              setCategory("expense");
            }}
          >
            Expense
          </button>
          <button
            className={`${
              Category == "income" ? "selected" : "notselect"
            }  sm:h-[4vh] md:h-[4vh]  lg:h-[5vh]  w-[40%] rounded-full flex items-center justify-center border-2 border-[#3fb9c7]`}
            onClick={() => {
              setCategory("income");
            }}
          >
            Income
          </button>
        </div>
      </div>

      <Expense prp={Category} />
    </div>
  </div>

  );
};

export default AddTranscation;
