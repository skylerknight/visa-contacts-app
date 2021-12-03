import React from "react";
import ContactCard from "./ContactCard";
import { useContacts } from "../contexts/contacts";

const ContactList = () => {
	const { contacts } = useContacts();
	return (
		<ul className="p-5 space-y-5">
			{contacts.map((contact) => (
				<ContactCard key={contact.id} {...contact} />
			))}
		</ul>
	);
};

export default ContactList;
