import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactList from "../components/ContactList";
import Button from "../components/Button";

import { UserIcon } from "@heroicons/react/outline";

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
						<Button variant="primary" icon={<UserIcon className="w-5 h-5" />} iconPosition="right">
							New Contact
						</Button>
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
