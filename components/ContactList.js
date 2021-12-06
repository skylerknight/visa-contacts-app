import React from "react";
import ContactCard from "./ContactCard";
import { useContacts } from "../contexts/contact";

const ContactList = () => {
	const { contacts } = useContacts();
	return (
		<ul className="space-y-5" aria-label="Contact List Control Group Buttons">
			{contacts.map((contact, index) => (
				<ContactCard key={contact.id} index={index + 1} {...contact} />
			))}
		</ul>
	);
};

export default ContactList;
