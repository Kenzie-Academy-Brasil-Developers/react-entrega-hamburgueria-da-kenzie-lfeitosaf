import Header from "./components/Header";
import "./styles/index.css";
import { GlobalStyle } from "./styles/global";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState } from "react";
import EmptyCart from "./components/EmptyCart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header
        filteredProduct={filteredProduct}
        setFilteredProduct={setFilteredProduct}
      />
      <Container>
        <ProductsList
          cartItem={cartItem}
          setCartItem={setCartItem}
          products={products}
          setProducts={setProducts}
        />
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
