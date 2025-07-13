import "./Products.css";

const ProductDetails = ({ children, product }) => {
  return (
    <div className="product__details">
      <h1 className="product__title">{product.company}</h1>
      <h3 className="product__subtitle">{product.title}</h3>
      <p className="product__description">{product.description}</p>
      <div className="product__pricing">
        <p className="product__total">
          ${((product.price * product.discount) / 100).toFixed(2)}
        </p>
        <div className="product__discount">{product.discount}%</div>
        <p className="product__amount">${product.price.toFixed(2)}</p>
      </div>
      <div className="product__cta">{children}</div>
    </div>
  );
};

export default ProductDetails;
