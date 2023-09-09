import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./ClassFileSelector.css";

interface ClassFileSelectorProps {
  onClassFileSelected: (classFile: File) => void;
}

export function ClassFileSelector({
  onClassFileSelected,
}: ClassFileSelectorProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.debug("dropped files", acceptedFiles);
      if (acceptedFiles.length > 0) {
        onClassFileSelected(acceptedFiles[0]);
      }
    },
    [onClassFileSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: { "application/java-vm": [".class"] },
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="class-file-selector">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here…</p>
      ) : (
        <p>
          Drag and drop or click to select a <code>.class</code> file
        </p>
      )}
    </div>
  );
}
