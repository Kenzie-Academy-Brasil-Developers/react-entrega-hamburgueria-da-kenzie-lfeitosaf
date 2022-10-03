import {
  CartTotalDivPrice,
  CartTotalDiv,
  CartTotalH3,
  CartTotalPrice,
  CartTotalButton,
} from "./styles";

const CartTotal = ({ cartItem, setCartItem }) => {
  const totalValue = cartItem.reduce(function (previousValue, currentValue) {
    return previousValue + Number(currentValue.price * currentValue.quantity);
  }, 0);

  return (
    <CartTotalDiv>
      <CartTotalDivPrice>
        <CartTotalH3>Total</CartTotalH3>
        <CartTotalPrice>R$ {totalValue.toFixed(2)}</CartTotalPrice>
      </CartTotalDivPrice>
      <CartTotalButton onClick={() => clearCart()}>
        Remover todos
      </CartTotalButton>
    </CartTotalDiv>
  );

  function clearCart() {
    setCartItem([]);
  }
};

export default CartTotal;
