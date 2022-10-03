import { useState } from "react";
import { InputSearch, Menu, Logo, Button, Nav, Form } from "./styles";
import "./styles.js";

const Header = ({ products, setFilteredProduct }) => {
  const [search, setSearch] = useState("");

  let arraySearch = [];

  function handleSearch(event) {
    event.preventDefault();

    products.forEach((item) => {
      let searchLower = search.toLowerCase();
      let itemLower = item.name.toLowerCase();
      if (itemLower.includes(searchLower)) {
        arraySearch.push(item);
        console.log(arraySearch);
      }
    });
    setFilteredProduct(arraySearch);
  }

  return (
    <Menu>
      <Nav>
        <Logo src="../../../burguerkenzie.png" />
        <Form onSubmit={handleSearch}>
          <InputSearch
            placeholder="Digitar pesquisa"
            type="search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </Form>
      </Nav>
    </Menu>
  );
};

export default Header;
