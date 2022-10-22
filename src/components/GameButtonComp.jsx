import React, { useState } from 'react'

const GameButtonComp = () => {
    const [buttons, setButtons] = useState(Array.from(Array(9).fill('')));
    
    return (
        <div className='h-auto flex flex-wrap w-[561px] my-2 mx-auto pl-5'>
            {
                buttons.map((el, i) => (
                    <button key={i} className='w-[130px] h-[130px] my-5 mx-5 bg-[#1F3641] rounded-lg' style={{boxShadow:  'inset 0px -8px 0px #10212A'}}></button>
                ))
            }
        </div>
    )
}

export default GameButtonComp