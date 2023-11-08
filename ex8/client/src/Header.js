import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          NaiChuan Teng
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Header;
