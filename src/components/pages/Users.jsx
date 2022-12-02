import { Link, Route, Switch } from 'react-router-dom';
import { usersData } from './../../App';

function Users(props) {
  return (
    <div>
      <h1>Users page</h1>
      <p className='subtitle'>This is our users</p>
      <button>Load more</button>

      <ul>
        {usersData.map((uObj) => (
          <li key={uObj.id}>
            <Link to={`/users/${uObj.id}`}>{uObj.name}</Link>
          </li>
        ))}
      </ul>
      <hr />

      {/* uzkrauti komponentu tame paciame puslapyje */}
      {/* <Switch>
        <Route path={'/users/1'}>
          <SingleUser />
        </Route>
        <Route path={'/users/2'}>
          <p>second user</p>
        </Route>
      </Switch> */}
    </div>
  );
}
export default Users;
