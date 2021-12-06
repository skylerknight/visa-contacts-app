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
		<div
			className="fixed inset-0 flex flex-col items-center justify-center p-5 bg-neutral-900/50 z-50"
			onClick={() => setPendingDeletion(null)}>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="dialog_label"
				className="flex flex-col w-full max-w-lg bg-base !p-0 shadow-2xl">
				<div className="p-8">
					<h2 id="dialog_label" className="mb-2 text-danger">
						Confirm Delete
					</h2>
					<p>Are you sure you want to delete {name}?</p>
				</div>
				<div id="delete_dialog_controls" aria-label="Delete Contact Dialog Controls">
					<div
						aria-label="Delete Contact Dialog Controls"
						className="flex flex-row justify-end space-x-5 p-4 bg-card">
						<Button
							variant="default"
							value="cancel"
							onClick={() => setPendingDeletion(null)}
							aria-label="Cancel,">
							Cancel
						</Button>
						<Button
							variant="danger"
							onClick={handleDelete}
							value="default"
							aria-label={`Delete ${name}`}>
							<TrashIcon className="w-5 h-5" />
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteDialog;
