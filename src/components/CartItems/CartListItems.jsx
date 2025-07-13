import Button from "../Buttons/Button";
import "./CartItems.css";

const CartListItems = ({ children }) => {
  return (
    <div className="cartitem">
      <h3 className="cartitem__title">cart</h3>
      <hr />
      <div className="cartitem__list">
        {children || <p className="cartitem__empty">your cart is empty</p>}
      </div>

      <div className="cartitem__cta">
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartListItems;
