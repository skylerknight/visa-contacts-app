import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import "../styles/base.css";
import ThemeProvider from "../contexts/theme";
import ContactsProvider from "../contexts/contact";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<ContactsProvider>
				<Component {...pageProps} />
			</ContactsProvider>
		</ThemeProvider>
	);
}

export default MyApp;
