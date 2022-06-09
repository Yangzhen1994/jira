export const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObj = (obj) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    if (isFalsy(obj[key])) {
      delete result[key];
    }
  });
  return result;
};
