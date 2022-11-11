import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [data, setData] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );

  const [page, setPage] = useState("home");
  const [characterId, setCharacterId] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const showCharacter = (id) => {
    setPage("character");
    setCharacterId(id);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    console.log(characterToDisplay.status);
    console.log(characterToDisplay.species);
    console.log(characterToDisplay.gender);
  };

  const characterToDisplay = data.find(
    (character) => character.id === characterId
  );

  return (
    <AppContainer>
      <Header>
        <Title>React and Morty</Title>
      </Header>
      <AppGrid>
        {page === "home" &&
          data.map((character) => (
            <CardContainer>
              <ImgContainer src={character.image} alt="character photo" />
              <h2>{character.name}</h2>
              <Button onClick={() => showCharacter(character.id)}>
                show more
              </Button>
            </CardContainer>
          ))}

        {page === "character" && (
          <CharacterPage>
            <CardContainer>
              <ImgContainer
                src={characterToDisplay.image}
                alt="character photo"
              />
              <h2>{characterToDisplay.name}</h2>
              <Button onClick={toggleDetails}>
                {showDetails ? "hide details" : "show details"}
              </Button>
              {showDetails && (
                <>
                  <p>Status: {characterToDisplay.status}</p>
                  <p>Species: {characterToDisplay.species}</p>
                  <p>Gender: {characterToDisplay.gender}</p>
                </>
              )}
            </CardContainer>
          </CharacterPage>
        )}
      </AppGrid>
      <FooterContainer>
        <NavbarContainer>
          <a href="#" onClick={() => changePage("home")}>
            Home
          </a>
          <a href="#" onClick={() => changePage("favourite")}>
            Character
          </a>
          <a href="#">Nav3</a>
          <a href="#">Nav4</a>
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
  position: fixed;
  top: 0;
  width: 100%;
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
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  margin: 1rem;
  padding-top: 1rem;
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

const Button = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const CharacterPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImgContainer = styled.img`
  border-radius: 50%;
`;
