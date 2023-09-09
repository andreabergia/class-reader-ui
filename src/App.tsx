import "./App.css";
import { Header } from "./Header";
import { ClassFileSelector } from "./ClassFileSelector";

export function App() {
  function onClassFileSelected(classFile: File) {
    console.log("selected class file", classFile);
  }

  return (
    <>
      <Header />
      <main>
        <ClassFileSelector onClassFileSelected={onClassFileSelected} />
      </main>
    </>
  );
}
