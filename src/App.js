import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            coded by{" "}
            <a
              href="https://www.github.com/hiimeems"
              target="_blank"
              rel="noopener noreferrer"
            >
              michelle chung
            </a>{" "}
            with{" "}
            <a
              href="https://www.shecodes.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              SheCodes
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
