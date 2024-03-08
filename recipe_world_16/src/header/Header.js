import React from 'react';
import Menu from '../menu/Menu';
import styles from './styles.css';

export default class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <h1>RECIPE WORLD</h1>
          <Menu/>
        </div>
      );
    }
  }