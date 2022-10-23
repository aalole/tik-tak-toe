import React from 'react'

import XGreeen from '../assets/images/x-green.png'
import OYellow from '../assets/images/O-yellow.png'
import Buttons from './Buttons'

const ModalComponent = ({winner, tie, message,title, btn1Text, btn2Text}) => {
    // winner === 'x' ? '#31C3BD' : winner === 'o' ? '#F2B137' : '#A8BFC9'
  return (
    // <div className='bg-[#000000] h-[100vh] absolute'>
        <div className='bg-[#1F3641] w-full h-[65vh] flex flex-col justify-center items-center absolute'>
            <div className="modal-box w-[35%] flex flex-col justify-center items-center h-[70%]">
                {
                winner === '' && tie ? <h2 className='text-[40px] font-bold text-[#A8BFC9]'>ROUND TIED</h2> : 
                <>
                    <h4 className='text-[#A8BFC9] text-base font-bold mb-4'>{title}</h4>
                    <div className='flex w-[90%] my-0 mx-auto justify-between  items-center'>
                    <img src={winner === 'X' ? XGreeen : OYellow} alt="who won" className='w-[44px] h-[44px]' style={{opacity: winner !== '' ? '1' : '0'}}/>
                    <h2 className='text-[40px] font-bold ' style={{color: winner === 'X' ? '#31C3BD' : winner === 'O' ? '#F2B137' : '#A8BFC9'}}>{message}</h2>
                    </div>
                    </>
                }
            <div className='flex justify-between w-[70%] mt-10'> 
                <Buttons color={'#A8BFC9'} text={btn1Text}   shadow={'inset 0px -4px 0px #6B8997'} />
                <Buttons color={'#F2B137'} text={btn2Text}   shadow={'inset 0px -8px 0px #CC8B13'} />
                </div>
            </div>
        </div>
    // </div>
    
  )
}

export default ModalComponent
