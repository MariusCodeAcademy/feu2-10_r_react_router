import { Link, Route, Switch } from 'react-router-dom';
import SingleUser from './SingleUser';

function Users(props) {
  return (
    <div>
      <h1>Users page</h1>
      <p className='subtitle'>This is our users</p>
      <button>Load more</button>

      <ul>
        <li>
          <Link to='/users/1'>first</Link>
        </li>
        <li>
          <Link to='/users/2'>second</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path={'/users/1'}>
          <SingleUser />
        </Route>
        <Route path={'/users/2'}>
          <p>second user</p>
        </Route>
      </Switch>
    </div>
  );
}
export default Users;
