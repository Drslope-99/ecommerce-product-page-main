import { useState } from "react";
import Header from "./layout/Header/Header";
import NavLogo from "./components/NavBar/NavLogo";
import NavLinks from "./components/NavBar/NavLinks";
import NavMenu from "./components/NavBar/NavMenu";
import CartMenu from "./components/Cart/CartMenu";
import CartListItems from "./components/CartItems/CartListItems";
import CartItem from "./components/CartItems/CartItem";
import UserProfile from "./components/UserProfile/UserProfile";
import MainContent from "./layout/MainContent/MainContent";
import ProductItem from "./components/Products/ProductItem";
import ProductDetails from "./components/Products/ProductDetails";
import Button from "./components/Buttons/Button";
import CartIcon from "./components/Cart/CartIcon";
import CartQuantityBtn from "./components/CartQuantityBtn/CartQuantityBtn";
import LightBox from "./components/LightBox/LightBox";
import { productData } from "./data/product";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(null);
  const product = { ...productData };

  const handleToggleCart = () => {
    setToggleCart((show) => !show);
  };

  const incrementHandler = () => {
    setCartQuantity((prevCount) => prevCount + 1);
    console.log(cartQuantity);
  };

  const decrementHandler = () => {
    setCartQuantity((prevCount) => {
      if (prevCount < 2) {
        return prevCount;
      } else {
        return prevCount - 1;
      }
    });
  };

  const handleAddToCart = () => {
    setCartItems((prevCart) => {
      let updatedCart;
      if (!prevCart) {
        updatedCart = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          discount: product.discount,
          quantity: cartQuantity,
        };
      } else {
        updatedCart = {
          ...prevCart,
          quantity: prevCart.quantity + cartQuantity,
        };
      }
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const handleCartDelete = () => {
    setCartItems(null);
  };

  return (
    <>
      <Header>
        <NavLogo />
        <NavLinks />
        <NavMenu>
          <CartMenu onClick={handleToggleCart} items={cartItems} />
          {toggleCart && (
            <CartListItems>
              {cartItems ? (
                <CartItem item={cartItems} onDelete={handleCartDelete} />
              ) : null}
            </CartListItems>
          )}
          <UserProfile />
        </NavMenu>
      </Header>
      <MainContent>
        <ProductItem setModal={setShowModal} />
        <ProductDetails product={product}>
          <CartQuantityBtn
            onIncrement={incrementHandler}
            onDecrement={decrementHandler}
            value={cartQuantity}
          />
          <Button icon={<CartIcon />} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </ProductDetails>
      </MainContent>
      <LightBox showModal={showModal} onClick={() => setShowModal(false)}>
        <ProductItem setModal={setShowModal} />
      </LightBox>
    </>
  );
}

export default App;
