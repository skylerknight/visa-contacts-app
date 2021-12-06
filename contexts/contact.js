import React from "react";

export const ContactContext = React.createContext();
export const useContacts = () => React.useContext(ContactContext);

const contactsReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "CREATE_CONTACT":
			return [...state, payload];
		case "DELETE_CONTACT":
			return state.filter((contact) => contact.id !== payload);
		case "UPDATE_CONTACT":
			return state.map((contact) => {
				if (contact.id === payload.id) {
					return payload;
				}
				return contact;
			});
		default:
			return state;
	}
};

export default function ContactsProvider({ children }) {
	const [contacts, contactsDispatch] = React.useReducer(contactsReducer, [
		{
			id: "1",
			firstName: "Skyler",
			lastName: "Knight",
			phoneNumber: "5555555555",
			email: "skylerknight@visa.com",
		},
		{
			id: "2",
			firstName: "Jane",
			lastName: "Doe",
			phoneNumber: "1234567890",
			email: "janedoe@visa.com",
		},
		{
			id: "3",
			firstName: "The",
			lastName: "Rock",
			phoneNumber: "2223334444",
			email: "therock@visa.com",
		},
	]);

	return (
		<ContactContext.Provider value={{ contacts, contactsDispatch }}>
			{children}
		</ContactContext.Provider>
	);
}
