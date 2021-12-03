import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

import { useContacts } from "../contexts/contact";

export default function Home() {
	const { setContacts } = useContacts();

	return (
		<Layout>
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="flex flex-col flex-1 bg-gray-50">
				<ContactList />
				<Link href="/contact/new">
					<a>Add Contact</a>
				</Link>
			</main>
			<Footer />
		</Layout>
	);
}
