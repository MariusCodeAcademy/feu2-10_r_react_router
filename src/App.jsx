import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='App container'>
      <Nav />

      <Route path={'/apie'}>
        <About />
      </Route>
      <Route path={'/kontaktai'}>
        <Contact />
      </Route>
      {/* <Route path={'/'}>
        <Home />
      </Route> */}
    </div>
  );
}

export default App;
