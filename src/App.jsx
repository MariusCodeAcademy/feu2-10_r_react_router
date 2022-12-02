import './App.css';
import Nav from './components/nav/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='App container'>
      <Nav />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
