import React from "react";

export const ContactsContext = React.createContext();
export const useContacts = () => React.useContext(ContactsContext);

export default function ContactsProvider({ children }) {
	const [contacts, setContacts] = React.useState([
		{
			id: 1,
			firstName: "Skyler",
			lastName: "Knight",
			phoneNumber: "555-555-5555",
			email: "skylerknight@visa.com",
		},
	]);

	return (
		<ContactsContext.Provider value={{ contacts, setContacts }}>
			{children}
		</ContactsContext.Provider>
	);
}
