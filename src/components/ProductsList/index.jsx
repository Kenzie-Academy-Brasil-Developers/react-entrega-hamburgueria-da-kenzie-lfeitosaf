import ProductCard from "../Product/index.jsx";
import "./styles.js";
import { List } from "./styles.js";

const ProductsList = ({ cartItem, setCartItem, products }) => {
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
