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
				"icon-primary": "var(--color-icon-bg-primary)",
				"button-primary": "var(--color-button-bg-primary)",
				"button-primary-hover": "var(--color-button-bg-primary-hover)",
				secondary: "var(--color-bg-secondary)",
				"icon-secondary": "var(--color-icon-bg-secondary)",
				"button-secondary": "var(--color-button-bg-secondary)",
				"button-secondary-hover": "var(--color-button-bg-secondary-hover)",
				success: "var(--color-success-background)",
			},
			ringColor: {
				primary: "var(--color-ring-primary)",
				"icon-primary": "var(--color-icon-bg-primary)",
				"button-primary": "var(--color-button-bg-primary)",
				"button-primary-hover": "var(--color-button-bg-primary-hover)",
				secondary: "var(--color-ring-secondary)",
				"icon-secondary": "var(--color-icon-bg-secondary)",
				"button-secondary": "var(--color-button-bg-secondary)",
				"button-secondary-hover": "var(--color-button-bg-secondary-hover)",
			},
			textColor: {
				primary: "var(--color-text-primary)",
				"icon-primary": "var(--color-icon-primary)",
				"button-primary": "var(--color-button-text-primary)",
				secondary: "var(--color-text-secondary)",
				"icon-secondary": "var(--color-icon-secondary)",
				"button-secondary": "var(--color-button-text-secondary)",
				success: "var(--color-success-foreground)",
			},
			borderColor: {
				primary: "var(--color-border-primary)",
				secondary: "var(--color-border-secondary)",
				success: "var(--color-success-background)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
