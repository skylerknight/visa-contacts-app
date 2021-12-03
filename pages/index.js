import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

import { useContacts } from "../contexts/contacts";

export default function Home() {
	const { setContacts } = useContacts();

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
					<Link href="/contact/new">
						<a>Add Contact</a>
					</Link>
				</main>
				<Footer />
			</div>
		</div>
	);
}
