import "./CartQuantityBtn.css";
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";

const CartQuantityBtn = ({ onIncrement, onDecrement, value }) => {
  return (
    <div className="qty">
      <button className="qty__btn" onClick={onDecrement}>
        <img src={MinusIcon} alt="-" />
      </button>
      <p className="qty__value">{value}</p>
      <button className="qty__btn" onClick={onIncrement}>
        <img src={PlusIcon} alt="+" />
      </button>
    </div>
  );
};

export default CartQuantityBtn;
