import React from 'react'

const Buttons = ({color, text, width, shadow, clickEvent}) => {
  return (
    <div className='my-6'>
      <button className='py-4 rounded-xl text-[20px] font-bold leading-6 tracking-wide px-4' style={{backgroundColor: color, width: width, boxShadow: shadow}} onClick={() => clickEvent()}>{text}</button>
    </div>
  )
}

export default Buttons
