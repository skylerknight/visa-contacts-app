import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useContacts } from "../../contexts/contacts";
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
			<h1>Page for editing contact</h1>
			{id && <>{contact ? <ContactForm {...contact} /> : <p>No contact found</p>}</>}
		</Layout>
	);
};

export default EditContactpage;
