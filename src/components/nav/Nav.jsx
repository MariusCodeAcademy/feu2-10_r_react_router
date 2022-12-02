import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to='/'>Home page</Link>
      <Link to='/apie'>About page</Link>
      <Link to='/kontaktai'>Contact page</Link>
    </nav>
  );
}
export default Nav;
