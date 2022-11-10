import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>React and Morty</Title>
      </Header>
      <AppGrid>
        <CardContainer>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="Photo"
          />
          <h2>Character name</h2>
          <button type="button">show more</button>
        </CardContainer>
      </AppGrid>
      <FooterContainer>
        <NavbarContainer>
          <a>Nav1</a>
          <a>Nav2</a>
          <a>Nav3</a>
          <a>Nav4</a>
        </NavbarContainer>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.body`
  text-align: center;
`;

const Header = styled.header`
  background-color: sandybrown;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  background-color: sandybrown;
  height: 100%;
`;

const AppGrid = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const CardContainer = styled.article`
  background-color: beige;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #ccd;
  border-radius: 10px;
`;

const FooterContainer = styled.footer`
  height: 3rem;
  background-color: sandybrown;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
