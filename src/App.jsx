import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import SingleUser from './components/pages/SingleUser';

export const usersData = [
  {
    id: 1,
    name: 'James Band',
    town: 'London',
    age: 99,
  },
  {
    id: 2,
    name: 'Jane Dow',
    town: 'Liverpool',
    age: 33,
  },
  {
    id: 3,
    name: 'Serbentautas',
    town: 'Kaunas',
    age: 27,
  },
];

function App() {
  return (
    <div className='App container'>
      <Nav />
      <Switch>
        <Route path={'/users/:userId'}>
          <SingleUser />
        </Route>
        <Route path={'/users'}>
          <Users />
        </Route>
        <Route path={'/apie'}>
          <About />
        </Route>
        <Route path={'/kontaktai'}>
          <Contact />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
