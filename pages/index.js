import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

import { useTheme } from "../contexts/theme";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function Home() {
	const { theme, toggleTheme } = useTheme();
	return (
		<Layout>
			<Head>
				<title>Visa Contacts App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				title="All Contacts"
				leftControl={
					<button className="icon-btn-default" onClick={() => toggleTheme()}>
						{theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
					</button>
				}
				rightControl={
					<Link href="/contact/new">
						<button className="btn-primary">New Contact</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1">
				<div className="p-5 w-full max-w-screen-md mx-auto">
					<ContactList />
				</div>
			</main>
		</Layout>
	);
}
