import "./NavBar.css";
import LogoImage from "../../assets/images/logo.svg";
const NavLogo = () => {
  return (
    <a href="#" className="nav__logo">
      <img src={LogoImage} alt="Sneakers" />
    </a>
  );
};

export default NavLogo;
