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
			backgroundColor: {
				base: "var(--color-base)",
				card: "var(--color-card)",
			},
			textColor: {
				heading: "var(--color-heading)",
				body: "var(--color-body)",
			},
			colors: {
				neutral: colors.blueGray,
				primary: {
					DEFAULT: "var(--color-primary)",
					dark: "var(--color-primary-dark)",
					light: "var(--color-primary-light)",
					foreground: "var(--color-primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--color-secondary)",
					dark: "var(--color-secondary-dark)",
					light: "var(--color-secondary-light)",
					foreground: "var(--color-secondary-foreground)",
				},
				default: {
					DEFAULT: "var(--color-default)",
					dark: "var(--color-default-dark)",
					light: "var(--color-default-light)",
					foreground: "var(--color-default-foreground)",
				},
				success: {
					DEFAULT: "var(--color-success)",
					dark: "var(--color-success-dark)",
					foreground: "var(--color-success-foreground)",
					contrast: {
						DEFAULT: "var(--color-success-contrast)",
						foreground: "var(--color-success-contrast-foreground)",
					},
				},
				warning: {
					DEFAULT: "var(--color-warning)",
					dark: "var(--color-warning-dark)",
					foreground: "var(--color-warning-foreground)",
					contrast: {
						DEFAULT: "var(--color-warning-contrast)",
						foreground: "var(--color-warning-contrast-foreground)",
					},
				},
				danger: {
					DEFAULT: "var(--color-danger)",
					dark: "var(--color-danger-dark)",
					foreground: "var(--color-danger-foreground)",
					contrast: {
						DEFAULT: "var(--color-danger-contrast)",
						foreground: "var(--color-danger-contrast-foreground)",
					},
				},
				info: {
					DEFAULT: "var(--color-info)",
					dark: "var(--color-info-dark)",
					foreground: "var(--color-info-foreground)",
					contrast: {
						DEFAULT: "var(--color-info-contrast)",
						foreground: "var(--color-info-contrast-foreground)",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
