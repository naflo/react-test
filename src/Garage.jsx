import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Garage extends React.Component {
  render () {
    return(
      <div>{/* conteneur parent */}      
        <h1>{this.props.title}</h1>
        <Voiture modele="500" year="2016">Fiat</Voiture>
        <Voiture modele="Classe B" year="2015">Mercedes</Voiture>
        <Voiture modele="488" year="">Ferrari</Voiture>
      </div>
    );
  }
}

const Voiture = (props) => {
  let year = (props.year) ? props.year : ' - ';
  return (
    <div className="voiture">
      {props.children} {props.modele} | année : {year}
    </div>
  )
}

export default Garage;
