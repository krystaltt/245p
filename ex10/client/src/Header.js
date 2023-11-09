import "./Header.css";

// External Libraries

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          NaiChuan Teng
        </a>
        <div className="headerRight">
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="exampledataview">About</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
