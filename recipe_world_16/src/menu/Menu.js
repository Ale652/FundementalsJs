import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home'
import styles from './styles.css';


export default class Menu extends React.Component {
    render() {
      return (
        <div className="main">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/suggest">Suggest</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact component={Home.js} />
            <Route path="/recipes" component={Home} />
            <Route path="/suggest" component={Home} />
          </Routes>
        </div>
      );
    }
  }