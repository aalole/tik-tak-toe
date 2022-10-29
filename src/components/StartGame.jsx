import React from 'react';

// import { redirect } from "react-router-dom";
import Xgreen from '../assets/images/x-green.png';
import Oyellow from '../assets/images/O-yellow.png';
import Buttons from './Buttons';

const StartGame = ({setPage}) => {
    const handleClick = () => {
      setPage(1)
    }
    return (
        <div className='welcome-container' >
            <div className='welcome-content'>
                {/* player icons */}
                <div className="text-center space-x-2">
                    <div className='h5 w-5 inline-block'>
                        <img src={Xgreen} alt="users" className='h-full w-full object-contain' />
                    </div>
                    <div className='h5 w-5 inline-block'>
                        <img src={Oyellow} alt="users" className='h-full w-full object-contain' />
                    </div>  
                </div>

                {/* switch card layer */}
                <div className="welcome-switch-container" style={{"backgroundColor": "#1f3641"}}>
                    <div className='text-center text-sm text-btn-lightgray pb-4'>PICK PLAYER 1'S MARK</div>
                    <div className="switch h-8">
                        <div className=' font-extrabold text-btn-lightgray w-1/2 text-center '>X</div>
                        <div className='text-app-bg bg-btn-lightgray font-extrabold w-1/2 text-center rounded-md'>O</div>
                    </div>
                    <p className='text-[14px] text-center text-[#A8BFC9] leading-[17.6px] pt-4 font-medium'>REMEMBER : X GOES FIRST</p>
                </div>
                <div>
                    <Buttons color={'#FFC860'} width={'100%'} text={'NEW GAME (VS CPU)'} shadow={'inset 0px -8px 0px #CC8B13'} clickEvent={handleClick} />
                    <Buttons color={'#65E9E4'} width={'100%'} text={'NEW GAME (PLAYER)'} shadow={'inset 0px -8px 0px #118C87'} clickEvent={handleClick} />
                </div>

            </div>
        </div>
    )
}

export default StartGame;
