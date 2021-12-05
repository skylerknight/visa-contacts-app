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
				base: "var(--color-base)",
				card: "var(--color-card)",
				heading: "var(--color-heading)",
				body: "var(--color-body)",
				primary: {
					DEFAULT: "var(--color-primary)",
					dark: "var(--color-primary-dark)",
					light: "var(--color-primary-light)",
					foreground: "var(--color-primary-foreground)",
					contrast: {
						DEFAULT: "var(--color-primary-contrast)",
						foreground: "var(--color-primary-contrast-foreground)",
					},
				},
				secondary: {
					DEFAULT: "var(--color-secondary)",
					dark: "var(--color-secondary-dark)",
					light: "var(--color-secondary-light)",
					foreground: "var(--color-secondary-foreground)",
					contrast: {
						DEFAULT: "var(--color-secondary-contrast)",
						foreground: "var(--color-secondary-contrast-foreground)",
					},
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
			borderColor: {
				DEFAULT: "var(--color-default)",
			},
			textColor: {
				DEFAULT: "var(--color-body)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
