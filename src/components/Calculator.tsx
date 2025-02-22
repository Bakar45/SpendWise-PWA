

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Calculator = () => {

    const dispatch = useDispatch()
    const selectRef = useRef(null);
    const [value, setValue] = useState<string>(" ")

    const screen: any = document.querySelectorAll('button')
    const process = (event: any) => {

        if (event.target.value == "=") {
            let res = eval(screen.value)
            screen.value = res

        } else if (event.target.value == "C") {
            screen.value = ""
        } else {
            if (event.target.value != undefined) {
                setValue(value + event.target.value)
            }
        }
        console.log(event.target.value)
    }
    return (
        <div className=' pt-10 h-[85vh] w-full  flex items-center justify-center'>


            <div onClick={process} className=" m-auto overflow-hidden  shadow-lg mb-2 bg-white shadow-lg border rounded-lg w-[80%] ">
                <div className="">

                    <div className=" text-white text-right text-3xl bg-[#3fb9c7] ">
                        <div ref={selectRef} className='h-[13vh] p-4 pt-8 '>{value}</div>
                    </div>

                </div>

                <div className="flex items-stretch  h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="7" className="rounded-full h-14 w-14 flex items-center   justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            7
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="8" className="rounded-full h-14 w-14 flex items-center   justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            8
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="9" className="rounded-full h-14 w-14 flex items-center  justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            9
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="/" className="rounded-full h-14 w-14 flex items-center  justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            /
                        </button>
                    </div>
                </div>
                <div className="flex items-stretch  h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="4" className="rounded-full h-14 w-14 flex items-center   justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            4
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="5" className="rounded-full h-14 w-14 flex items-center   justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            5
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="6" className="rounded-full h-14 w-14 flex items-center  justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            6
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="*" className="rounded-full h-14 w-14 flex items-center  justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            x
                        </button>
                    </div>
                </div>
                <div className="flex items-stretch  h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="1" className="rounded-full h-14 w-14 flex items-center   justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            1
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="2" className="rounded-full h-14 w-14 flex items-center   justify-center    hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            2
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="3" className="rounded-full h-14 w-14 flex items-center  justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            3
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="-" className="rounded-full h-14 w-14 flex items-center   justify-center   hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            -
                        </button>
                    </div>
                </div>
                <div className="flex items-stretch h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="0" className="rounded-full h-14 w-14 flex items-center   justify-center   hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            0
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-2xl font-semibold">
                        <button value="+" className="rounded-full h-14 w-14 flex items-center  justify-center    hover:border-2 active:bg-[#3fb9c7] focus:outline-none">
                            +
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold">
                        <button value='=' className="rounded-full h-14 w-14 flex items-center text-orange-500 justify-center  hover:border-2 active:bg-[#3fb9c7] focus:outline-none" onClick={() => {
                            let result = eval(value)
                            setValue(result)
                        }}>
                            =
                        </button>
                    </div>
                    <div className="flex-1 px-2 py-2 justify-center flex items-center  text-l font-bold">
                    <Link to="/addtransactions">
                      <button className="rounded-full h-14 w-14 flex items-center text-green-500 justify-center hover:border-2 active:bg-[#3fb9c7] focus:outline-none " onClick={() => {
                            
                            dispatch({
                                type: "CALCULATED_VALUE",
                                payload: eval(value)
                            })
                        }}>
                            Apply
                        </button> </Link>  
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calculator