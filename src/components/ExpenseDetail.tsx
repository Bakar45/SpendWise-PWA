
import { useEffect } from "react"
import { useState } from "react";
const ExpenseDetail = ({ value }: any) => {

  let [expense, setExpense] = useState<any>([])

  useEffect(() => {

    //////////////////// Taking data from localStorage ///////////////////
    const data: any[] = JSON.parse(localStorage.getItem('Transactions') as string) || [];

    //////////////////// Update or add items to the 'names' array ///////////////////
    let expensearry: any = [];
    data.forEach((item: any) => {
      let someobj = expensearry.find((obj: any) => item.detail.id === obj.detail.id);
      if ( someobj) {
        someobj.value = parseInt(someobj.value) + parseInt(item.value);
        setExpense(expensearry)
      } else {
        if (item.type == "expense") {
          expensearry.push(item);
          setExpense(expensearry)
        }
      }
    });
  }, []);
  return (
      <div className=' w-full bg-white p-4'>

        <div className='text-lg text-gray-500 font-bold py-2'> Expense Detail</div>
        {
          expense.map((obj: any) => {
            return <div className='mt-1 h-[7vh] w-full text-sm flex justify-between bg-gray-50 px-3'>
              <div className='flex'>
                <div className='h-full w-[50px]'><img src={obj.detail.logo} /></div>
                <div className='py-3'>{obj.detail.name}</div>
              </div>
              <div className='py-3'>PKR {obj.value}</div>
            </div>
          })

        }

      </div>
  )
}

export default ExpenseDetail