import React from "react";

import {
  Card,
  DivBody,
  DivHeader,
  Title,
  Category,
  Price,
  Button,
} from "./styles";

const ProductCard = ({ product, setCartItem, cartItem }) => {
  function handleAddProduct(event) {
    const ProductExist = cartItem.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }

    event.preventDefault();
  }

  return (
    <Card>
      <DivHeader>
        <img src={product.img} alt="" />
      </DivHeader>
      <DivBody>
        <Title>{product.name}</Title>
        <Category>{product.category}</Category>
        <Price>R$ {product.price}</Price>
        <Button onClick={handleAddProduct}>Adicionar</Button>
      </DivBody>
    </Card>
  );
};

export default ProductCard;
