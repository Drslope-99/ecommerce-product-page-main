import toggleIcon from "../../assets/images/icon-menu.svg";

export default function NavToggleBtn({ onClick }) {
  return (
    <button className="nav__btn" onClick={onClick}>
      <img src={toggleIcon} />
    </button>
  );
}
