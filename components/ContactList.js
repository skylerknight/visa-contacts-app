import React from "react";
import ContactCard from "./ContactCard";
import { useContacts } from "../contexts/contact";

const ContactList = () => {
	const { contacts } = useContacts();
	return (
		<ul className="space-y-5">
			{contacts.map((contact) => (
				<ContactCard key={contact.id} {...contact} />
			))}
		</ul>
	);
};

export default ContactList;
