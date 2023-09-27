import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { BsArrowDownShort } from 'react-icons/bs';

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center h-10 bg-[#79AC78] text-white px-10'>
      <div className='font-bold'>
        Reeco
      </div>
      <div>
        <ul className='flex'>
          <li className='mr-5'>
            Store
          </li>
          <li className='mr-5'>
            Order
          </li>
          <li className='mr-5'>
            Anlytics
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <AiOutlineShoppingCart/>
        <div className='ml-5'>
          Hello,Jems
        </div>
        <BsArrowDownShort/>
      </div>
    </div>
  )
}

export default Navbar