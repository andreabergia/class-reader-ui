import "./App.css";
import { Header } from "./Header";
import { ClassFileSelector } from "./ClassFileSelector";
import { wasm_read_buffer, WasmClass } from "@andreabergia/class-reader";
import { useState } from "react";
import { ClassFileDisplay } from "./ClassFileDisplay";
import { LoadingError } from "./LoadingError";

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const [error, setError] = useState<any>(null);
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
        {error && <LoadingError message={JSON.stringify(error)} />}
        {classFile && <ClassFileDisplay classFile={classFile} />}
      </main>
    </>
  );
}
