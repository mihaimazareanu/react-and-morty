import "./App.css";

function App() {
  return (
    <body className="App">
      <header>
        <h1>React and Morty</h1>
      </header>
      <main>
        <section>
          <article>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="Photo"
            />
            <h2>Character name</h2>
            <button type="button">show more</button>
          </article>
        </section>
      </main>
      <footer>
        <navbar>
          <a>Nav1</a>
          <a>Nav2</a>
          <a>Nav3</a>
          <a>Nav4</a>
        </navbar>
      </footer>
    </body>
  );
}

export default App;
