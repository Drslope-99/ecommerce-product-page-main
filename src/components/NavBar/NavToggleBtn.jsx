import toggleIcon from "../../assets/images/icon-menu.svg";

export default function NavToggleBtn() {
  return (
    <button className="nav__btn">
      <img src={toggleIcon} />
    </button>
  );
}
