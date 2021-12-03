import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header title="Visa Contacts" />
			<main className="flex flex-col flex-1 bg-gray-50">
				<ContactList />
			</main>
			<Footer />
		</Layout>
	);
}
