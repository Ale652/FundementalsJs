import React from 'react';
import styles from './styles.css';
import faryCake from '../images/FaryCake.png';


export default class Main extends React.Component {
    render() {
      return (
        <div className="main">
          <p id="subject">FEATURED: MAGIC CAKE</p>
          <img id="imageCake" src={faryCake} alt="Fairy Cake" />
        </div>
      );
    }
  }