import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Button from "../../components/buttons/Button";
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
				leftControls={
					<Button href="/" variant="default">
						<ChevronLeftIcon className="w-5 h-5" />
						Back
					</Button>
				}
			/>
			<main className="flex flex-col flex-1 w-full max-w-screen-sm m-auto">
				{id && contact ? (
					<>
						<ContactForm {...contact} />
					</>
				) : (
					<div className="flex flex-col items-center justify-center flex-1 p-5">
						<p className="mb-5">The contact you are looking for was not found</p>
						<Button type="button" href="/" variant="default">
							<ChevronLeftIcon className="w-5 h-5" />
							Return to Home
						</Button>
					</div>
				)}
			</main>
		</Layout>
	);
};

export default EditContactpage;
