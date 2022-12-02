import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link className='active' to='/'>
        Home page
      </Link>
      <Link to='/apie'>About page</Link>
      <Link to='/kontaktai'>Contact page</Link>
      <Link to='/users'>Users</Link>
    </nav>
  );
}
export default Nav;
