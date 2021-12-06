import React from "react";
import Button from "./buttons/Button";
import IconButton from "./buttons/IconButton";
import { formatPhoneNumber } from "../helpers";
import { useContacts } from "../contexts/contact";

import {
	ChevronDownIcon,
	ChevronUpIcon,
	PencilIcon,
	TrashIcon,
	UserIcon,
} from "@heroicons/react/outline";

const ContactCard = ({ id, email, firstName, lastName, phoneNumber }) => {
	const { contactsDispatch } = useContacts();
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCardClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<article className="border shadow-sm overflow-hidden" onClick={handleCardClick}>
			<header
				className={`flex flex-row items-center justify-center space-x-5 p-4 ${
					isExpanded && "border-b"
				}`}>
				<div className="flex flex-col w-12 h-12 border bg-default-contrast	text-default-contrast-foreground">
					<UserIcon className="w-6 h-6 m-auto" />
				</div>

				<div className="flex-1">
					<h2 className={`${isExpanded ? "text-lg" : "text-sm"}`}>
						{firstName} {lastName}
					</h2>
					{!isExpanded && <p className="text-sm mt-1">{formatPhoneNumber(phoneNumber)}</p>}
				</div>
				<button className="icon-btn-default" onClick={handleCardClick}>
					{isExpanded ? (
						<ChevronUpIcon className="w-5 h-5" />
					) : (
						<ChevronDownIcon className="w-5 h-5 m-auto" />
					)}
				</button>
			</header>
			{isExpanded && (
				<div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
					<div className="flex flex-col space-y-5 p-5">
						<h3 className="mb-2 text-xs">Phone Number</h3>
						{formatPhoneNumber(phoneNumber)}
						<h3 className="mb-2 text-xs">Email Address</h3>
						{email}
					</div>
					<div className="w-full flex flex-row items-center justify-between p-4 space-x-5 border-t border-default">
						<IconButton
							variant="danger-contrast"
							onClick={() => contactsDispatch({ type: "DELETE_CONTACT", payload: id })}>
							<TrashIcon className="w-5 h-5" />
						</IconButton>
						<Button href={`/contact/${id}`} variant="default">
							<PencilIcon className="w-4 h-4" />
							Edit
						</Button>
					</div>
				</div>
			)}
		</article>
	);
};

export default ContactCard;
