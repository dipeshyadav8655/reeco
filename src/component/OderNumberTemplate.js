import React from 'react';
import {BsArrowRightShort} from 'react-icons/bs'

function OderNumberTemplate() {
  return (
    <div className='shadow-md h-fit border-b border-white-500 flex justify-between px-10 py-2'>
        <div className='py-1'>
            <div className='flex items-center'>
                <span>Orders</span> 
                <BsArrowRightShort className='ml-1'/>
                <span>
                    Order325896ABC
                </span>
            </div>
            <div className='text-lg font-semibold'>
               Order 325896ABC
            </div>
        </div>
        <div className='flex items-end justify-between'>
                <button className='w-16  px-2 py-1 border text-center border-[#79AC78] text-[#618264] rounded-full mr-5'>Back</button>
            <button className='bg-[#618264] px-2 py-1 text-white text-center rounded-full'>Approve order</button>
        </div>
    </div>
  )
}

export default OderNumberTemplate