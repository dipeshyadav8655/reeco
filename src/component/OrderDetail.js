import React from 'react';
import ItemList from './ItemsList';
import { useSelector } from 'react-redux';
function OrderDetails() {
  const data = useSelector((state) => state.data);

  return (
    <>
    <div className='grid-container'>
        <div className='grid-items'>Image</div>
        <div className='grid-items item-two'>Product</div>
        <div className='grid-items'>Brand</div>
        <div className='grid-items'>Price</div>
        <div className='grid-items'>Quantity</div>
        <div className='grid-items'>Total</div>
        <div className='grid-items item-seven'>Status</div>
        <div className='grid-items'>Action</div>
    </div>
    {
        data.map((item,index)=>{
          return <ItemList item={item} key={index} index={index} />
        })
    }
    </>
  )
}

export default OrderDetails