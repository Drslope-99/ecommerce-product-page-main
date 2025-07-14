import "./CartItems.css";
import cartItemImage from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/images/icon-delete.svg";

const CartItem = ({ item, onDelete }) => {
  const multiplier = item.discount ? item.discount / 100 : 1;
  const price = item.price * multiplier;
  return (
    <div className="item">
      <div className="item__image">
        <img src={cartItemImage} alt="item image" />
      </div>
      <div className="item__details">
        <p className="item__title">title of the item</p>
        <p className="item__price">
          ${price.toFixed(2)} X {item.quantity}{" "}
          <span className="item__total">
            ${(item.quantity * price).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="item__delete">
        <button className="item__delete-btn" onClick={onDelete}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
