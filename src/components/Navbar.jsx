import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <Link className="navbar-brand" to={'/'}>
        <nav>Wiki Countries</nav>
      </Link>
    </div>
  );
};

export default Navbar;
