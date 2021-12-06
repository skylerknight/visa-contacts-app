import React from "react";
import Button from "./buttons/Button";
import { useRouter } from "next/router";
import { useContacts } from "../contexts/contact";
import { TrashIcon } from "@heroicons/react/outline";

const DeleteDialog = () => {
	const [name, setName] = React.useState();
	const router = useRouter();
	const { contacts, contactsDispatch, pendingDeletion, setPendingDeletion } = useContacts();

	React.useEffect(() => {
		const contact = contacts.find((contact) => contact.id === pendingDeletion);
		if (contact) setName(`${contact.firstName} ${contact.lastName}`);
	}, [pendingDeletion, contacts]);

	const handleDelete = () => {
		contactsDispatch({ type: "DELETE_CONTACT", payload: pendingDeletion });
		setPendingDeletion(null);
		router.push("/");
	};

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center p-5 bg-neutral-900/50 z-50">
			<div className="flex flex-col w-full max-w-lg bg-base shadow-2xl">
				<div className="p-8">
					<h2 className="mb-2 text-danger">Confirm Delete</h2>
					<p>Are you sure you want to delete {name}?</p>
				</div>
				<div className="flex flex-row justify-end space-x-5 p-4 bg-card">
					<Button variant="default" onClick={() => setPendingDeletion(null)}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleDelete}>
						<TrashIcon className="w-5 h-5" />
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DeleteDialog;
