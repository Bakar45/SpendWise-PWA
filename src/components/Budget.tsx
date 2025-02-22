import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface props {
  tname: string,
  total: string,
  pic: string,
  date: string,
  index: string
}

const Budget = ({ tname, total, pic, date, index }: props) => {
  const Transactions = JSON.parse(localStorage.getItem("Transactions") as any);
  const Budgets = JSON.parse(localStorage.getItem("Budgets") as any)

  const [totalB, setTotalB] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [Percentage, setPercentage] = useState<number>(0);

  const dispatch = useDispatch()
  useEffect(() => {
    let calculatedTotalB = 0;

    Transactions.forEach((obj: any) => {
      const dateStr = obj.Date;
      const cropped = dateStr.substring(3, 6);
      const comingDate = date.substring(3, 6);

      if (cropped === comingDate && obj.detail.name === tname) {
        calculatedTotalB += obj.value;
      }
    });

    setTotalB(calculatedTotalB);
    setLeft(Number(total) - calculatedTotalB);

  }, [Transactions, tname, total, date]);

  const per = Math.floor((totalB / Number(total)) * 100);

  return (
    <>

      <div className='h-[15vh] bg-white px-3 shadow-md flex flex-col justify-around mb-2'>
        <div className='mb-1 w-full h-[60px] rounded-md bg-white flex justify-between items-center p-2'>
          <span className='h-full flex  flex-row'>
            <span className='relative w-[50px] h-full flex justify-center items-center'><img className='h-full w-full' src={pic} alt="Profile Pic" /></span>
            <span className='px-2'>
              <div>
                <div className='text-black'>{tname}</div>
                {totalB < Number(total) &&
                  <span>
                    <span className='text-gray-500'>Left :<span className='text-black'> {left}</span> </span>

                  </span>}

                {totalB >= Number(total) && <span className=' text-red-400'>Completed  </span>}
              </div>
            </span>
          </span>
          <div>
            {totalB < Number(total) &&
              <div className='text-[#42b1a7] text-lg'>PKR {total} <span className='text-sm text-gray-400 '>/ {totalB}</span></div>}


            <div className='text- text-gray-500  bottum-0 absolute  '> {date}</div>
          </div>
          {totalB >= Number(total) &&
            <button className='relaltive mt-[-40px] w-[5%] text-red-500 text-xl' onClick={() => {
              // const a = Budgets.filter((item: any) => {
              //   return item != Budgets[index]
              // })
              // localStorage.setItem('Budgets', JSON.stringify(a));

              dispatch({
                type: "DEL_BUDGET",
                payload: index
              })

            }}>x</button>}
        </div>
        <ProgressBar
          completed={per}
          bgColor="#2bacaa"
          height="10px"
          isLabelVisible={false}
          labelColor="#f2f0f0"
        />
      </div>
    </>

  )
}

export default Budget;
