import "@fontsource/poppins";
import "tailwindcss/tailwind.css";
import ContactsProvider from "../contexts/contacts";

function MyApp({ Component, pageProps }) {
	return (
		<ContactsProvider>
			<Component {...pageProps} />;
		</ContactsProvider>
	);
}

export default MyApp;
