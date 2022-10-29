import React from 'react'

const GameButtonComp = ({buttons, draw}) => {    
    return (
        <div className='h-auto flex flex-wrap w-[561px] my-2 mx-auto pl-5'>
            {
                buttons.map((el, i) => (
                    <button key={i} className={`w-[130px] h-[130px] my-5 mx-5 bg-[#1F3641] rounded-lg text-lg font-bold text-gray`} style={{boxShadow:  'inset 0px -8px 0px #10212A'}} onClick={(e)=> draw(e, i+1)}></button>
                ))
            }
        </div>
    )
}

export default GameButtonComp