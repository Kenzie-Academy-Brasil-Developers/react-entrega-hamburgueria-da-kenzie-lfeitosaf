import CartProduct from "../CartItem/index.jsx";
import "./styles.js";
import {
  CartBody,
  CartDiv,
  CartHeader,
  CartList,
  CartTitle,
} from "./styles.js";
import CartTotal from "../CartTotal/index.jsx";

const Cart = ({ cartItem, setCartItem }) => {
  return (
    <CartDiv>
      <CartHeader>
        <CartTitle>Carrinho de compras</CartTitle>
      </CartHeader>
      <CartBody>
        <CartList>
          {cartItem.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          ))}
        </CartList>
        <CartTotal cartItem={cartItem} />
      </CartBody>
    </CartDiv>
  );
};

export default Cart;
