import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

import "tailwindcss/tailwind.css";
import ContactsProvider from "../contexts/contact";

function MyApp({ Component, pageProps }) {
	return (
		<ContactsProvider>
			<Component {...pageProps} />
		</ContactsProvider>
	);
}

export default MyApp;
