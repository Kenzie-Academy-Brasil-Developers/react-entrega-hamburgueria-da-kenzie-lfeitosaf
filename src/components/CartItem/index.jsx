import React from "react";
import {
  CardImg,
  CartItem,
  CartItemButton,
  CartItemSpan,
  CartItemTitle,
  CartQuantity,
  DivImgTitle,
  DivTitles,
} from "./styles";

const CartProduct = ({ product, cartItem, setCartItem }) => {
  return (
    <CartItem>
      <DivImgTitle>
        <CardImg src={product.img} />
        <DivTitles>
          <CartItemTitle>{product.name}</CartItemTitle>
          <CartItemSpan>{product.category}</CartItemSpan>
          <CartQuantity>{product.quantity}</CartQuantity>
        </DivTitles>
      </DivImgTitle>
      <CartItemButton onClick={() => removeCard(product)}>
        Remover
      </CartItemButton>
    </CartItem>
  );

  function removeCard(deletedCard) {
    const newCardList = cartItem.filter((card) => card !== deletedCard);

    setCartItem(newCardList);
  }
};

export default CartProduct;
