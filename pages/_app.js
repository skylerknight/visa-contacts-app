import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

import "../styles/base.css";
import ContactsProvider from "../contexts/contact";

function MyApp({ Component, pageProps }) {
	return (
		<ContactsProvider>
			<Component {...pageProps} />
		</ContactsProvider>
	);
}

export default MyApp;
