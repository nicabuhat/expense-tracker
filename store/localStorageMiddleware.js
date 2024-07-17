export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  try {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  } catch (e) {
    console.warn("Error saving state to localStorage:", e);
  }
  return result;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
