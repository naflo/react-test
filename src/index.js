import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Garage from './Garage';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Garage />
      </div>
    );
  }
}

ReactDOM.render (
  <Game />,
  document.getElementById('root')
);
