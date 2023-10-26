import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        CRUD Operations
      </Link>
      <div className="">
        <Link to="/create-student" className=" nav-link">CreateStudent</Link>
        <Link to="/student-list" className=" nav-link">ListStudent</Link>
      </div>
    </nav>
  );
}
export default Nav;
