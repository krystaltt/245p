import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="scottie">Scottish Terrier</Link>
        <Link to="westie">West Highland White Terrier</Link>
        <Link to="norwich">Norwich Terrier</Link>
      </div>
    </>
  );
}

export default Sidebar;
