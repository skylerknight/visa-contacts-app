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
						<button type="button" className="flex w-8 h-8">
							<PlusCircleIcon className="w-5 h-5 m-auto" />
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1">
				<ContactList />
			</main>
			<Footer />
		</Layout>
	);
}
