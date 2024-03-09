import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import Recipes from '../src/pages/recipes/Recipes';
import Suggest from '../src/pages/suggest/Suggest';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/suggest" element={<Suggest />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
