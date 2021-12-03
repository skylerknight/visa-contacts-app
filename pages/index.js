import Head from "next/head";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col m-auto w-full max-w-lg min-h-[500px] border">
				<Header />
				<main className="flex flex-col flex-1 bg-gray-50">
					<ContactList />
				</main>
				<Footer />
			</div>
		</div>
	);
}
