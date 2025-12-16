import { createContext, useContext } from "react";

export const useThemeContext = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return {
        theme,
        toggleTheme
    };
}

export const ThemeContext = createContext({theme: 'light', setColor: () => {}});