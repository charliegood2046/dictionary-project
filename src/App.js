import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">🐉 Dragon Dictionary 🐉</header>
        <main>
          <Dictionary defaultKeyword="dragon" />
        </main>
        <footer className="App-footer">
          Coded by Charlie G. and hosted on{" "}
          <a
            href="https://github.com/charliegood2046/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
