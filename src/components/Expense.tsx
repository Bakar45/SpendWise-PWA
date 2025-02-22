
import React from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
interface props {
    prp: string
}



const Expense = ({ prp }: props) => {

    const Categories = prp === 'expense' ? [
        { name: 'Food ', logo: '/food.png', id: 1 },
        { name: 'Fuel', logo: '/fuel.png', id: 2 },
        { name: 'Transport', logo: '/car.png', id: 3 },
        { name: 'Travel', logo: '/plan.png', id: 4 },
        { name: 'Rent', logo: '/rent.png', id: 5 },
        { name: 'Personal', logo: '/personal.png', id: 6 },
        { name: 'Shopping', logo: '/shopping.png', id: 7 },
        { name: 'Entertainment', logo: '/entertainment.png', id: 8 },
    ] : [
        { name: 'Salary ', logo: '/salary.png', id: 9 },
        { name: 'Commision', logo: '/profitt.png', id: 10 },
        { name: 'Pension', logo: '/pension.png', id: 11 },
        { name: 'Bonus', logo: '/bonuss.png', id: 12 },
        { name: 'Profit', logo: '/profit.png', id: 13 },
        { name: 'Investment', logo: '/investment.png', id: 15 },
    ];
    const dispatchh = useDispatch()

    const ref = React.useRef<HTMLInputElement>(null)
    const [payment, setpayment] = useState<string>("")
    const idToFind = useSelector((store: any) => store.Process.selectedCategory)

    const valu = useSelector((store: any) => store.Process.calculatedValue)

    const [clickedBox, setClickedBox] = useState<number | null | string>(null);
    const [BtnState, setBtnState] = useState<boolean |undefined>();
    let dispatch = useDispatch()

    useEffect(() => {


        const ArrayString = localStorage.getItem('Transactions');
        if (ArrayString) {

        } else {
            const emptyArray: any = [];
            localStorage.setItem('Transactions', JSON.stringify(emptyArray));

        }
    }, []);
const location=useLocation()
useEffect(()=>{
    console.log("route  changed" ,location.pathname)
})
let navigate=useNavigate()

    return (
        <div>
            <div className='border relative w-[80%] shadow-sm h-[40px] mt-4 flex left-[10%]'>
                <input required className=' relative w-full  h-full  p-2 focus:outline-none ' type='number' placeholder=' PKR' ref={ref} value={valu != "" ? valu : null} />
                
            </div>

            <div className='py-2 font-bold text-gray-600  '>
                <span className=' text-lg ml-4'>  Select Category </span>
                <div className='flex mt-5 w-full min-h-[33vh]  border justify-around flex-wrap  p-2'>

                    {
                        Categories.map((category) => {
                            ////////////// return category/////////
                            return <div className='w-20 h-[15vh] justify-center  flex  flex-col items-center ' onClick={() => {
                                dispatch({
                                    type:"H_INDEX",
                                    payload:1
                                  })

                                dispatchh({
                                    type: 'SELECTED_ID',
                                    payload: category.id
                                })
                                setClickedBox(category.name)

                            }}>
                                <div className={` ${clickedBox == category.name ? 'borderr' : ""}  rounded-full  relative h-[60px] w-[60px] flex justify-center items-center bg-white  my-1`}>         <img className='relative w-[80%]' src={category.logo} />
                                </div>
                                <div className='text-xs mt-2 flex justify-center'>{category.name}</div>
                            </div>
                        })
                        ////////////////////
                    }
                </div>

            </div>
            <div className='py-2 font-bold text-gray-600 '>
                <span className=' text-lg  ml-4'>  Select Account </span>
                <div className=' w-full  flex  gap-x-3 p-2'>

                    <div className='w-[15vh] h-[15vh]  flex  flex-col items-center'>
                        <div className={` ${payment == 'Cash' ? 'borderr' : ""}  rounded-full  relative h-[60px] w-[60px] flex justify-center items-center bg-white my-1`} onClick={() => (setpayment('Cash'))}>      <img className='relative w-[70%]' src='/cash.png' />
                        </div>
                        <div className='text-xs'>Cash</div>
                    </div>

                    <div className='w-[15vh] h-[15vh]  flex  flex-col items-center'>
                        <div className={`${payment == "Bank Account" ? 'borderr' : ""}   rounded-full  relative h-[60px] w-[60px] flex justify-center items-center bg-white my-1  `} onClick={() => (setpayment("Bank Account"))}>         <img className='relative w-[70%]' src='/bank.png' />
                        </div>
                        <div className='text-xs' >Bank Account</div>
                    </div>

                </div>

            </div><div className='w-full flex items-center justify-center'>

             <button  className='bg-[#3fb9c7] w-[80%] h-[5vh] text-lg text-white border-none ' onClick={() => {

                const inputvalue: any = ref.current?.value
                ////////////////////Seleted Category//////////////////

                const foundObject = Categories.find(item => item.id == idToFind)
                ////////////pament method////////////

                ///////////////////Date////////////

                const date = new Date();
                const day = date.getDate().toString().padStart(2, '0');
                const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
                const month = monthNames[date.getMonth()];
                const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const dayOfWeek = dayOfWeekNames[date.getDay()];

                const currentdate = `${day}-${month}-${dayOfWeek}`;


                /////////////Final Object/////////////
                const newExpense = {
                    type: prp,
                    value: parseInt(inputvalue),
                    detail: foundObject,
                    Date: currentdate,
                    Payment: payment
                }
                if (newExpense.type !== '' && (!isNaN(newExpense.value)) && Object(newExpense.detail).length !== 0 && newExpense.Date !== '' && newExpense.Payment !== '') {


                    setBtnState(false)
                    const myarray = JSON.parse(localStorage.getItem('Transactions') as any);

                    myarray.push(newExpense)
                    localStorage.setItem('Transactions', JSON.stringify(myarray));
                    // console.log(myarray)
                    console.log(BtnState)

                    dispatch({
                        type: "SHOW_NAVBAR"
                    })
                    navigate("/")
                    console.log('All properties have values.');
                } else {
                    // setBtnState(true)
                    console.log(BtnState)
                    console.log('Some properties are empty.');
                    // dispatch({
                    //     type: "SHOW_NAVBAR"
                    // })
                }
            }
            }
            >FINISH</button>
            </div>


        </div>
    )
}

export default Expense

