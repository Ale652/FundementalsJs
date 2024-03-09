import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';



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
        </div>
      );
    }
  }