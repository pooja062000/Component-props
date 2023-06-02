
import Home from './Components.js/Home';
import About from './Components.js/About';
import Contact from './Components.js/Contact';
import Header from './Components.js/Header';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Header/>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
