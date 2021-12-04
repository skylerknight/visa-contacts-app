import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

import { PlusCircleIcon } from "@heroicons/react/solid";
export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				title="All Contacts"
				rightControl={
					<Link href="/contact/new">
						<button className="flex flex-row items-center border px-3 py-2 rounded-md text-sm font-bold bg-blue-800 text-white">
							New Contact
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1">
				<div className="p-5 w-full max-w-screen-md mx-auto">
					<ContactList />
				</div>
			</main>
			<Footer />
		</Layout>
	);
}
