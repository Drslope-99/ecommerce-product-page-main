import "./Cart.css";
import CartIcon from "../../assets/images/icon-cart.svg";

const Cart = ({ onClick, items }) => {
  return (
    <div className="cart" onClick={onClick}>
      <button className="cart__btn">
        <img src={CartIcon} alt="cart" />
      </button>
      {items ? (
        <span className="cart__item-indicator">{items.quantity}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
