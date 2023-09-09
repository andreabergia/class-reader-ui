import "./App.css";
import { Header } from "./Header";
import { ClassFileSelector } from "./ClassFileSelector";
import { wasm_read_buffer, WasmClass } from "class-reader";
import { useState } from "react";

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any | null>(null);
  const [classFile, setClassFile] = useState<WasmClass | null>(null);

  function onClassFileSelected(classFile: File) {
    console.log("selected class file", classFile);

    setError(null);

    classFile
      .arrayBuffer()
      .then((buffer: ArrayBuffer) => {
        const data = new Uint8Array(buffer);
        return wasm_read_buffer(data);
      })
      .then((classFile: WasmClass) => {
        console.log("class file", classFile);
        setClassFile(classFile);
      })
      .catch((err) => {
        console.error("error reading class file", err);
        setError(err);
      });
  }

  return (
    <>
      <Header />
      <main>
        <ClassFileSelector onClassFileSelected={onClassFileSelected} />
        {error && <div className="error">{JSON.stringify(error)}</div>}
        {classFile && <pre>{JSON.stringify(classFile, null, 2)}</pre>}
      </main>
    </>
  );
}
