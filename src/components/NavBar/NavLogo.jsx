import "./NavBar.css";
import LogoImage from "../../assets/images/logo.svg";

const NavLogo = ({ children }) => {
  return (
    <div className="nav__logo">
      {children}
      <a href="#">
        <img src={LogoImage} alt="Sneakers" />
      </a>
    </div>
  );
};

export default NavLogo;
