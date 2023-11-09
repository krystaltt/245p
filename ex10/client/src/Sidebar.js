import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="exampledataview">About</Link>
      </div>
    </>
  );
}

export default Sidebar;
