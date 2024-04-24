import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            Coded by Raazia Razi and sourced at{" "}
            <a
              href="https://github.com/Raazia-26/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
