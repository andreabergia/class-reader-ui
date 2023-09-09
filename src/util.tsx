/* eslint-disable @typescript-eslint/no-explicit-any */

const isSimpleObject = (data: any): boolean => {
  const keys = Object.keys(data);
  return (
    keys.length <= 1 ||
    (keys.length === 2 && keys.every((key) => isSimple(data[key])))
  );
};

const isSimpleArray = (data: any[]): boolean =>
  data.length <= 1 ||
  (data.length <= 2 && data.every((item) => isSimple(item)));

export const isSimple = (data: any): boolean =>
  !data ||
  typeof data !== "object" ||
  (!Array.isArray(data) && isSimpleObject(data)) ||
  (Array.isArray(data) && isSimpleArray(data));
