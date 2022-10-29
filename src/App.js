import './assets/css/index.css';
import React, {useReducer, useState}from 'react';
import * as ReactRouter from 'react-router-dom';

// 
import StartGame from './components/StartGame';
import GameBoard from './components/GameBoard';

// components needed
  //players component
  // 

  const ACTIONS = {
   
}

function reducer(todos, action){
    switch (action.type) {
        default:
            return todos
    }
}

function App() {
  const [game, dispatch] = useReducer(reducer, []);
  const [page, setPage] = useState(0);
  const [winner, setWinner] = useState('');
  const [tie, setTie] = useState(false);
  

  
  return (
    <React.Fragment>
      <ReactRouter.BrowserRouter>
        <ReactRouter.Switch>
          {/* <ReactRouter.Router> */}
            {/* <ReactRouter.Route exact path='/' component={StartGame} />
            <ReactRouter.Route exact path='/play' component={GameBoard} /> */}
            {
              page === 0 && <StartGame setPage={setPage}/>
            }
            {
              page === 1 && <GameBoard setPage={setPage} setWinner={setWinner} winner={winner} tie={tie} setTie={setTie} />
            }
          {/* </ReactRouter.Router> */}
        </ReactRouter.Switch>
      </ReactRouter.BrowserRouter>
    </React.Fragment>
  );
}

export default App;
