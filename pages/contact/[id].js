import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContacts } from "../../contexts/contact";
import ContactForm from "../../components/ContactForm";

const EditContactpage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { contacts } = useContacts();
	const [contact, setContact] = React.useState(null);

	React.useEffect(() => {
		if (id === undefined) return;
		setContact(contacts.find((contact) => contact.id === parseInt(id)) || null);
	}, [contacts, id]);

	return (
		<Layout>
			{id && (
				<>
					{contact ? (
						<>
							<Header title="Visa Contacts" />
							<main className="flex flex-col flex-1 bg-gray-50">
								<Link href={`/`}>
									<a className="">Back</a>
								</Link>
								<ContactForm {...contact} />
							</main>
							<Footer />
						</>
					) : (
						<p>No contact found</p>
					)}
				</>
			)}
		</Layout>
	);
};

export default EditContactpage;
