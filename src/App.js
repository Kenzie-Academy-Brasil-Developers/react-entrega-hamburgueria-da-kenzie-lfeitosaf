import Header from "./components/Header";
import "./styles/index.css";
import { GlobalStyle } from "./styles/global";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import EmptyCart from "./components/EmptyCart";
import api from "./components/services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header products={products} setFilteredProduct={setFilteredProduct} />
      <Container>
        {filteredProduct.length === 0 ? (
          <ProductsList
            cartItem={cartItem}
            setCartItem={setCartItem}
            products={products}
          />
        ) : (
          <ProductsList
            cartItem={cartItem}
            setCartItem={setCartItem}
            products={filteredProduct}
          />
        )}
        {cartItem.length !== 0 ? (
          <Cart cartItem={cartItem} setCartItem={setCartItem} />
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
}

export default App;
