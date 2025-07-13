import "./LightBox.css";
import IconClose from "../../assets/images/icon-close.svg";

const SVGComponent = (props) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 14 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7
      9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595
      4.596L11.596.782Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const LightBox = ({ children, showModal, onClick }) => {
  return showModal ? (
    <div className="overlay">
      <div className="overlay__content">
        <button className="close__btn" onClick={onClick}>
          <SVGComponent fill={"white"} />
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default LightBox;
