import "./Header.css";
import github from "./assets/github-mark.svg";

function AppTitle() {
  return (
    <>
      <h1>
        <code>.class</code> reader in wasm
      </h1>
    </>
  );
}

function GitHubLink() {
  return (
    <a
      className="github-link"
      href="https://github.com/andreabergia/todo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={github} alt="GitHub repository" />
    </a>
  );
}

export function Header() {
  return (
    <div className="header">
      <AppTitle />
      <GitHubLink />
    </div>
  );
}
