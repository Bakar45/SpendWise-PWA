

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';


interface Props {
    name: string;
    logo: string;
    id: any;
}

const Category = ({ name, logo, id }: Props) => {


    const [clickedBox, setClickedBox] = useState<number | null | string>(null);
    let dispatch = useDispatch()

    return (


        <div className='w-[20vw] h-[15vh] justify-center  flex  flex-col items-center ' onClick={() => {
            dispatch({
                type: 'SELECTED_ID',
                payload: id
            })
            setClickedBox(name)

        }}>
            <div className={` ${clickedBox == name ? 'borderr' : ""}  rounded-full  relative h-[60px] w-[60px] flex justify-center items-center bg-white  my-1`}>         <img className='relative w-[80%]' src={logo} />
            </div>
            <div className='text-xs mt-2 flex justify-center'>{name}</div>
        </div>

    )
}
export default Category