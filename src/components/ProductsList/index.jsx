import ProductCard from "../Product/index.jsx";
import "./styles.js";
import { useEffect, useState } from "react";
import { List } from "./styles.js";
import api from "../services/api.js";

const ProductsList = ({ cartItem, setCartItem }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      ))}
    </List>
  );
};

export default ProductsList;
