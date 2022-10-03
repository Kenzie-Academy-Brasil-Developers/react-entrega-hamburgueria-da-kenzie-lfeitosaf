import { InputSearch, Menu, Logo, Button, Nav, Form } from "./styles";
import "./styles.js";

const Header = () => {
  return (
    <Menu>
      <Nav>
        <Logo src="../../../burguerkenzie.png" />
        <Form>
          <InputSearch placeholder="Digitar pesquisa" type="search" />
          <Button type="submit">Pesquisar</Button>
        </Form>
      </Nav>
    </Menu>
  );
};

export default Header;
