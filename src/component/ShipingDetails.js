import React from 'react'
import Details from './Details'

function ShipingDetails() {
  return (
    <div className='w-full mt-5'>
        <div className='mx-10 flex border border-gray-300 rounded-md'>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        <div className='border border-gray-300 my-2'></div>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        <div className='border border-gray-300 my-2'></div>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        <div className='border border-gray-300 my-2'></div>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        <div className='border border-gray-300 my-2'></div>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        <div className='border border-gray-300 my-2'></div>
        <Details title='Suppiler' data='East coast fruits & vrgitable' />
        </div>    
    </div>
  )
}

export default ShipingDetails