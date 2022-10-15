import React from 'react';
import Xgreen from '../assets/images/x-green.png';
import Oyellow from '../assets/images/O-yellow.png';

const StartGame = () => {
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
                        <div className=' font-extrabold text-btn-lightgray w-1/2 text-center'>X</div>
                        <div className='text-app-bg bg-btn-lightgray font-extrabold w-1/2 text-center rounded-md'>O</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartGame;
