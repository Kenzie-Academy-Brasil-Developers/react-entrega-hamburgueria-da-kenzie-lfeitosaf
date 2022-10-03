import "./styles.js";
import {
  CartAddSpan,
  CartBody,
  CartEmpty,
  CartHeader,
  CartTitle,
  CartWarning,
} from "./styles.js";

const EmptyCart = () => {
  return (
    <CartEmpty>
      <CartHeader>
        <CartTitle>Carrinho de compras</CartTitle>
      </CartHeader>
      <CartBody>
        <CartWarning>Sua sacola está vazia</CartWarning>
        <CartAddSpan>Adicione itens</CartAddSpan>
      </CartBody>
    </CartEmpty>
  );
};

export default EmptyCart;
