const colors = require("tailwindcss/colors");

module.exports = {
	// mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				gray: colors.blueGray,
			},
			backgroundColor: {
				primary: "var(--color-bg-primary)",
				secondary: "var(--color-bg-secondary)",
				"button-primary": "var(--color-button-bg-primary)",
				"button-secondary": "var(--color-button-bg-secondary)",
				"button-primary-hover": "var(--color-button-bg-primary-hover)",
				"button-secondary-hover": "var(--color-button-bg-secondary-hover)",
			},
			textColor: {
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
				"button-primary": "var(--color-button-text-primary)",
				"button-secondary": "var(--color-button-text-secondary)",
			},
			borderColor: {
				primary: "var(--color-border-primary)",
				secondary: "var(--color-border-secondary)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
