import React, { useState, useEffect } from 'react'


// images
import Xgreen from '../assets/images/x-green.png';
import Oyellow from '../assets/images/O-yellow.png';
import Redo from '../assets/images/Redo.png';
import XGray from '../assets/images/x-gray.png';
import GameButtonComp from './GameButtonComp';
import ModalComponent from './ModalComponent';


const GameBoard = ({ winner, setWinner, tie, setTie, setIsOpen, isOpen, setPage }) => {

  const [buttons,] = useState(Array.from(Array(9).fill('')));

  const [isRestart, setIsRestart] = useState(false);
  const [turn, setTurn] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen)
    // setIsRestart(!isRestart);
    // setWinner('')
  };
  const toggleRestart = () => {
    setIsRestart(!isRestart)
  }

  const play = (event, index) => {

    // Draws only if the position is not taken 
    // and winner is not decided yet
    if (buttons[index - 1] === '' && winner === '') {

      // Draws X if it's player 1's turn else draws O
      const current = turn === 0 ? "X" : "O";

      // Updating the buttons state
      buttons[index - 1] = current;

      //Drawing on the board
      event.target.innerText = current;

      // Switching the turn
      setTurn(turn === 0 ? 1 : 0);
      // checkWon()
    }
  };


  // useEffect hook used to check for a winner
  // useEffect(() => {

  // Checks for the win condition in rows
  const checkRow = () => {
    let ans = false;
    for (let i = 0; i < 9; i += 3) {
      ans |= (buttons[i] === buttons[i + 1] &&
        buttons[i] === buttons[i + 2] &&
        buttons[i] !== '')
    }
    return ans;
  }

  // Checks for the win condition in cols
  const checkCol = () => {
    let ans = false;
    for (let i = 0; i < 3; i++) {
      ans |= (buttons[i] === buttons[i + 3] &&
        buttons[i] === buttons[i + 6] &&
        buttons[i] !== '')
      }
    return ans;
  }

  // Checks for the win condition in diagonals
  const checkDiagonal = () => {
    return ((buttons[0] === buttons[4] &&
      buttons[0] === buttons[8] && buttons[0] !== '') ||
      (buttons[2] === buttons[4] && buttons[2] === buttons[6] &&
        buttons[2] !== ''));
  };

  // Checks if at all a win condition is present
  const checkWin = () => {
    return (checkRow() || checkCol() || checkDiagonal());
  }

  // Checks for a tie
  const checkTie = () => {
    let count = 0;
    buttons.forEach((cell) => {
      if (cell !== '') {
        count++;
      }
    })
    return count === 9;
  }

  // Setting the winner in case of a win
  if (checkWin()) {
    setWinner(turn === 0 ? "Player 2 Wins!" :
      "Player 1 Wins!");
    // setIsOpen(true);
    // setIsOpen(!isOpen);
  } else if (checkTie()) {

    // Setting the winner to tie in case of a tie
    setWinner("It's a Tie!");
    // setIsOpen(true);
  }
  // eslint-disable-next-line
  // }, [winner]);

  // const closeModal = () => {
  //   // setIsOpen(false);
  //   if (winner !== '' && isOpen === true) {
  //     console.log('there is a winner');
  //     setIsOpen(false);
  //   }
  //   setIsOpen(false);

  // }

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
        <div className='flex bg-[#1f3641] items-center py-4 px-4 text-[#A8BFC9] text-[16px] leading-[20.16px]  font-medium rounded-xl' style={{ boxShadow: 'inset 0px -4px 0px #10212A' }}>
          <img src={turn === 0 ? XGray : Oyellow} alt='x gray' className='w-[20px] h-[20px] mx-2' /> TURN
        </div>
        <button className='bg-[#A8BFC9] py-4 px-4 rounded-lg' style={{ boxShadow: 'inset 0px -4px 0px #6B8997' }}><img src={Redo} alt='redo' onClick={toggleModal} /></button>
      </div>
      {/* #1A2A33 */}
      <GameButtonComp buttons={buttons} draw={play} turn={turn} />
      {(isOpen || winner !== '') && <ModalComponent winner={winner} tie={tie} message={winner ? winner : 'RESTART GAME?'} title={''} btn1Text={'NO, CANCEL'} btn2Text={'YES, RESTART'} setPage={setPage} setIsOpen={setIsOpen} isOpen={ isOpen } />}
      {/* {(winner && isOpen ) && <ModalComponent winner={winner} tie={tie} message={winner} btn1Text={'NO, CANCEL'} btn2Text={'YES, RESTART'} setPage={setPage} closeModal={closeModal} isOpen={isOpen} setIsOpen = {setIsOpen} />} */}
      <div className='bottom-card flex justify-between px-2 py-2 mt-2 mx-auto w-full'>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#31C3BD] rounded-xl text-center items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>X (you)</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>14</p></div>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#A8BFC9] rounded-xl items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>Ties</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>32</p></div>
        <div className='flex flex-col w-[20%] h-[72px] bg-[#F2B137] rounded-xl items-center py-2'><span className='text-[#1A2A33] text-[14px] leading-[17.64px] font-medium'>O (CPU)</span> <p className='text-[#1A2A33] text-[24px] leading-[30.24px] font-bold'>11</p></div>
      </div>
    </div>
  )
}

export default GameBoard
