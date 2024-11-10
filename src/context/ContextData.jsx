import { createContext, useReducer } from "react";

const ThemeContexttt = createContext();

// get Data from Local Storage
const initialData = {
  name:
    localStorage.getItem("name") === null
      ? "Light"
      : localStorage.getItem("name") === "Light"
      ? "Light"
      : "Dark",
  theme:
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : "dark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_THEMES":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  // set Data from Local Storage
  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
    localStorage.setItem("name", newName);
  };

  const changeThemes = (newTheme) => {
    dispatch({
      type: "CHANGE_THEMES",
      newValue: newTheme,
    });
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContexttt.Provider
      value={{
        ...firstState,
        changeName,
        changeThemes,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
