import { createContext, useContext } from "react";

export const  ThemeContext = createContext({
    thememode : "light",
    lightMode : () => {},
    darkMode : () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export const UseTheme = () => {
    return useContext(ThemeContext)
}