/* eslint-disable @typescript-eslint/no-explicit-any */

import { WasmClass } from "class-reader";
import { JSONTree } from "react-json-tree";
import "./ClassFileDisplay.css";

interface ClassFileDisplayProps {
  classFile: WasmClass;
}

export function ClassFileDisplay({ classFile }: ClassFileDisplayProps) {
  const isSimple = (data: any): boolean =>
    typeof data !== "object" ||
    Object.keys(data).length === 1 ||
    (Array.isArray(data) && data.every((item) => isSimple(item)));

  const getItemString = (
    type: string,
    data: any,
    _itemType: React.ReactNode,
    itemString: string
  ) => (
    <span>
      {type} {isSimple(data) ? JSON.stringify(data) : itemString}
    </span>
  );

  return (
    <div className="class-file-display">
      <JSONTree
        data={classFile}
        theme="monokai"
        invertTheme={true}
        getItemString={getItemString}
      />
    </div>
  );
}
