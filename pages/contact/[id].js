import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/forms/ContactForm";

import { useRouter } from "next/router";
import { useContacts } from "../../contexts/contact";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/outline";

const EditContactpage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { contacts } = useContacts();
	const [contact, setContact] = React.useState(null);

	React.useEffect(() => {
		if (id == null) return;
		setContact(contacts.find((contact) => contact.id === id) || null);
	}, [contacts, id]);

	return (
		<Layout>
			<Header
				centerTitle
				title={`Update Contact`}
				leftControl={
					<Link href="/">
						<button className="btn-secondary">
							<ChevronLeftIcon className="w-5 h-5" />
							Back
						</button>
					</Link>
				}
			/>
			<main className="flex flex-col flex-1 w-full max-w-screen-sm m-auto">
				{id && contact ? (
					<>
						<ContactForm {...contact} />
					</>
				) : (
					<div className="flex flex-col items-center justify-center flex-1 p-5">
						<p className="mb-5">No contact found</p>
						<Link href="/">
							<button
								type="button"
								className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
								Go Back
							</button>
						</Link>
					</div>
				)}
			</main>
			<Footer />
		</Layout>
	);
};

export default EditContactpage;
