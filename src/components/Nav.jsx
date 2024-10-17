import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link style={{ marginLeft: '10px' }} to="/colors">Home</Link>
      <Link style={{ marginLeft: '10px' }} to="/colors/new">Add New Color</Link>
    </nav >
  )
};

export default Nav;