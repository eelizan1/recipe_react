import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious...</Logo>
        </Nav>
        <Search />
        <Category />
        {/* all the routing will be here in Pages  */}
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-context: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
