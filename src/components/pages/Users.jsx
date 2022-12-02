import { Link } from 'react-router-dom';

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
    </div>
  );
}
export default Users;
