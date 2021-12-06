import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/buttons/Button";
import IconButton from "../components/buttons/IconButton";
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
				leftControls={
					<IconButton
						variant="default"
						onClick={toggleTheme}
						aria-label={`Turn on ${theme === "light" ? "dark" : "light"} Mode`}>
						{theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
					</IconButton>
				}
				rightControls={
					<Button href="/contact/new" variant="primary">
						New Contact
					</Button>
				}
			/>
			<main className="flex flex-col flex-1">
				<div className="lg:p-5 w-full max-w-screen-md mx-auto">
					<ContactList />
				</div>
			</main>
		</Layout>
	);
}
