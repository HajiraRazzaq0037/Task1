export const getItem = (key) => {
  try {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  } catch {
    // clearStorage();
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // clearStorage();
    return null;
  }
};
