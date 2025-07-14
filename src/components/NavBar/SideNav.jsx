import IconClose from "../../assets/images/icon-close.svg";

export default function SideNav({ clicked, isActive }) {
  return (
    <nav className={`sidenav ${isActive}`}>
      <button onClick={clicked}>
        <img src={IconClose} />
      </button>
      <ul>
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
    </nav>
  );
}
