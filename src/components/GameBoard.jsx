import React, { useState } from 'react'


// images
import Xgreen from '../assets/images/x-green.png';
import Oyellow from '../assets/images/O-yellow.png';
import Redo from '../assets/images/Redo.png';
import XGray from '../assets/images/x-gray.png';
import GameButtonComp from './GameButtonComp';
import ModalComponent from './ModalComponent';
const GameBoard = ({winner, setWinner, tie, setTie, setIsOpen, isOpen}) => {
  const [isRestart, setIsRestart] = useState(false)
  const toggleModal = () => {
    setIsOpen(true)
    setIsRestart(true)
  }
  
  return (
    // w-[460px]
    <div className='game-board-container w-[561px] h-[85vh] my-0 mx-auto flex justify-center items-center flex-col'>
      <div className='top-card flex justify-between  items-center px-2 py-2 w-full'>
          <div className="text-center space-x-2">
                <div className='h5 w-5 inline-block'>
                            <img src={Xgreen} alt="users" className='h-full w-full object-contain' />
                </div>
                <div className='h5 w-5 inline-block'>
                            <img src={Oyellow} alt="users" className='h-full w-full object-contain' />
                </div>  
          </div>
          <div className='flex bg-[#1f3641] items-center py-4 px-4 text-[#A8BFC9] text-[16px] leading-[20.16px]  font-medium rounded-xl' style={{boxShadow: 'inset 0px -4px 0px #10212A'}}>
              <img src={XGray} alt='x gray' className='w-[20px] h-[20px] mx-2'/> TURN
          </div>
          <button className='bg-[#A8BFC9] py-4 px-4 rounded-lg' style={{boxShadow: 'inset 0px -4px 0px #6B8997'}}><img src={Redo} alt='redo' onClick={toggleModal}/></button>
      </div>
      {/* #1A2A33 */}
      <GameButtonComp/>
      {(isOpen && isRestart) && <ModalComponent winner={winner} tie={tie} message={'RESTART GAME?'} title={''} btn1Text={'NO, CANCEL'} btn2Text={'YES, RESTART'}/>}
      <div className='bottom-card flex justify-between px-2 py-2 mt-2 mx-auto w-full'>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#31C3BD] rounded-xl text-center items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>X (you)</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>14</p></div>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#A8BFC9] rounded-xl items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>Ties</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>32</p></div>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#F2B137] rounded-xl items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>O (CPU)</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>11</p></div>
      </div>
    </div>
  )
}

export default GameBoard
