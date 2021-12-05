import React from "react";

export const ThemeContext = React.createContext();
export const useTheme = () => React.useContext(ThemeContext);

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = React.useState("light");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
