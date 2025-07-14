import "./NavBar.css";
import LogoImage from "../../assets/images/logo.svg";
import NavToggleBtn from "./NavToggleBtn";
const NavLogo = () => {
  return (
    <div className="nav__logo">
      <NavToggleBtn />
      <a href="#">
        <img src={LogoImage} alt="Sneakers" />
      </a>
    </div>
  );
};

export default NavLogo;
