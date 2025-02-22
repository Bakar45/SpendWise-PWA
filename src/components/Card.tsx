

import React from 'react'


interface props{
    pic:string,
    tname:string,
    payment:string,
    amount:string,
    date:string,
    typee:string
}

const Card = ({pic,tname,payment,amount,date,typee}:props) => {
    return (
        <div className='mt-1 w-full h-[60px] rounded-md bg-white flex justify-between items-center p-2'>
            <span className='h-full flex  flex-row'>
                <span className='relative w-[50px] h-full flex justify-center items-center'><img src={pic}/></span>
                <span className='px-2'>
                    <div className='text-sm'>{tname}</div>
                    <div className='text-sm text-gray-400'>{payment}</div>
                </span>
            </span>
            <span className=''>
                <div className={`${ typee =="income"? "text-green-600": "text-red-500"} text-sm `}>PKR {amount}</div>
                <div className='text-sm text-gray-400'> {date}</div>
            </span>
        </div>
    )
}

export default Card