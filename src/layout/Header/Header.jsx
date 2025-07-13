import "./Header.css";

const Header = ({ children }) => {
  return (
    <nav className="nav">
      <div className="container nav__container">{children}</div>
    </nav>
  );
};

export default Header;
