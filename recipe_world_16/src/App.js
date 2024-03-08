import './App.css';
import Header from './header/Header';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import Main from './main/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Main/>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
