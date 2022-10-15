import './assets/css/index.css';
import React from 'react';
import * as ReactRouter from 'react-router-dom';

// 
import StartGame from './components/StartGame';
import GameBoard from './components/GameBoard';

// components needed
  //players component
  // 
function App() {
  return (
    <React.Fragment>
      <ReactRouter.BrowserRouter>
        <ReactRouter.Switch>
          {/* <ReactRouter.Router> */}
            <ReactRouter.Route exact path='/' component={StartGame} />
            <ReactRouter.Route exact path='/play' component={GameBoard} />
          {/* </ReactRouter.Router> */}
        </ReactRouter.Switch>
      </ReactRouter.BrowserRouter>
    </React.Fragment>
  );
}

export default App;
