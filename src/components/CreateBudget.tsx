import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import React from "react"

const CreateBudget = () => {
  let navigate = useNavigate()
  const [clickedBox, setClickedBox] = useState<number | null | string>(null);
  let dispatch = useDispatch()
  const Categories = [
    { name: 'Food ', logo: '/food.png', id: 1 },
    { name: 'Fuel', logo: '/fuel.png', id: 2 },
    { name: 'Transport', logo: '/car.png', id: 3 },
    { name: 'Travel', logo: '/plan.png', id: 4 },
    { name: 'Rent', logo: '/rent.png', id: 5 },
    { name: 'Personal', logo: '/personal.png', id: 6 },
    { name: 'Shopping', logo: '/shopping.png', id: 7 },
    { name: 'Entertainment', logo: '/entertainment.png', id: 8 },
  ]
  
  useEffect(() => {
    const ArrayString = localStorage.getItem('Budgets');
    if (!ArrayString) {
      localStorage.setItem('Budgets', JSON.stringify([]));
    }
  }, []);

  const ref = useRef<HTMLInputElement>(null)
  const idToFind = useSelector((store: any) => store.Process.selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen w-full max-w-[620px] mx-auto pt-[10vh] px-4">
      <div className="w-full flex items-center mb-2">
        <Link to="/budget">
          <img src='/arroww.png' className='h-6 w-8  rounded-full shadow-sm hover:scale-105 transition-transform duration-200' onClick={() => dispatch({ type: "HEADING", payload: "Budgets" })} />
        </Link>
      </div>

      <div className=' rounded-lg shadow-md w-full h-[50px] flex items-center '>
        <input ref={ref} className='p-2  w-full h-full focus:outline-none text-gray-700' type='number' placeholder='Amount to set for Budget' />
      </div>

      <div className='py-2 font-bold text-gray-500'>
        <span className='text-lg'>Select Category</span>
        <div className=' bg-white grid grid-cols-3 sm:grid-cols-4 gap-1 mt-4 w-full p-2'>
          {Categories.map((category) => (
            <div key={category.id} className='flex flex-col items-center p-2 rounded-lg cursor-pointer  transition-all duration-200' onClick={() => {
                setClickedBox(category.name);
                dispatch({ type: 'SELECTED_ID', payload: category.id });
              }}>
              <div className={`${clickedBox === category.name ? 'border-2 border-[#3fb9c7]' : ''} rounded-full relative h-[60px] w-[60px] flex justify-center items-center bg-gray-100 shadow-md`}> 
                <img className='w-[80%]' src={category.logo} alt={category.name} />
              </div>
              <div className='text-xs mt-2 text-gray-700 text-center font-medium'>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      <button className='bg-[#3fb9c7] w-full  mx-auto mt-2 h-[5vh] text-lg text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200' onClick={() => {
        let inputvalue = ref.current?.value;
        const foundObject = Categories.find(item => item.id == idToFind);
        const date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const month = monthNames[date.getMonth()];
        const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayOfWeek = dayOfWeekNames[date.getDay()];
        const currentDate = `${day}-${month}-${dayOfWeek}`;

        const myobj = { totalAmount: inputvalue, detail: foundObject, date: currentDate };
        const isMyObjEmpty = Object.values(myobj).some(value => value === null || value === undefined || value === "");
        if (!isMyObjEmpty) {
          const ArrayString = JSON.parse(localStorage.getItem('Budgets') as any);
          ArrayString.push(myobj);
          localStorage.setItem('Budgets', JSON.stringify(ArrayString));
          navigate("/budget");
          dispatch({ type: "HEADING", payload: "Budgets" });
        }
      }}>SAVE BUDGET</button>
    </div>
  )
}

export default CreateBudget;
