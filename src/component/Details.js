import React from 'react'

function Details(props) {
  return (
    <div className='px-3 py-3 mx-5'>
        <p className='text-sm text-gray-500 font-semibold'>
          {props.title}
         </p>
        <p className='font-semibold'>
            {props.data}
        </p>
    </div>
  )
}

export default Details