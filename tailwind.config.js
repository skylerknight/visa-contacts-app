const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				neutral: colors.blueGray,
				primary: {
					DEFAULT: "var(--color-primary)",
					dark: "var(--color-primary-dark)",
					light: "var(--color-primary-light)",
				},
				secondary: {
					DEFAULT: "var(--color-secondary)",
					dark: "var(--color-secondary-dark)",
					light: "var(--color-secondary-light)",
				},
				default: {
					DEFAULT: "var(--color-default)",
					dark: "var(--color-default-dark)",
					light: "var(--color-default-light)",
				},
			},
			backgroundColor: {
				base: "var(--color-base)",
				card: "var(--color-card)",
			},
			textColor: {
				heading: "var(--color-heading)",
				body: "var(--color-body)",
				primary: "var(--color-primary-text)",
				secondary: "var(--color-secondary-text)",
				default: "var(--color-default-text)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
