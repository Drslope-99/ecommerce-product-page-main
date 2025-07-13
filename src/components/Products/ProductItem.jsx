import "./Products.css";
import { productImage } from "../../data/product";
import { useState } from "react";
import prevIcon from "../../assets/images/icon-previous.svg";
import nextIcon from "../../assets/images/icon-next.svg";

const Thumbnails = ({ image, clicked, activeImage }) => {
  return (
    <div className="thumbnails">
      {image.map((img) => (
        <div
          className={`thumbnail ${activeImage === img.full ? "active" : ""}`}
          key={img.thumbnail}
          onClick={() => clicked(img.full)}
        >
          <img
            src={img.full}
            alt="product-image"
            className="thumbnail__image"
          />
        </div>
      ))}
    </div>
  );
};

const ProductItem = ({ setModal }) => {
  const [count, setCount] = useState(3);
  const [image, setImage] = useState(productImage[count].full);

  const nextHandler = () => {
    setCount((prev) => {
      const next = (prev + 1) % productImage.length;
      setImage(productImage[next].full);
      return next;
    });
  };

  const prevHandler = () => {
    setCount((prev) => {
      const next = (prev - 1 + productImage.length) % productImage.length;
      setImage(productImage[next].full);
      return next;
    });
  };

  const handleImageClick = (img) => {
    setImage(img);
    setModal(true);
  };

  return (
    <div className="product">
      <div className="product__container">
        <button className="product__btn prev" onClick={prevHandler}>
          <img src={prevIcon} />
        </button>
        <button className="product__btn next" onClick={nextHandler}>
          <img src={nextIcon} />
        </button>
        <img src={image} alt="product image" className="product__image" />
      </div>
      <Thumbnails
        image={productImage}
        clicked={handleImageClick}
        activeImage={image}
      />
    </div>
  );
};

export default ProductItem;
