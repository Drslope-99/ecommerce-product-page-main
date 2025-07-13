import "./NavBar.css";
const NavLinks = () => {
  return (
    <ul className="nav__list">
      <li>
        <a href="#" className="nav__link">
          collections
        </a>
      </li>
      <li>
        <a href="#" className="nav__link">
          men
        </a>
      </li>
      <li>
        <a href="#" className="nav__link">
          women
        </a>
      </li>
      <li>
        <a href="#" className="nav__link">
          about
        </a>
      </li>
      <li>
        <a href="#" className="nav__link">
          contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
