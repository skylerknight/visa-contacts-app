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

const ContactCard = ({ index, id, email, firstName, lastName, phoneNumber }) => {
	const { confirmAndDelete } = useContacts();
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCardClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<li className="border shadow-sm overflow-hidden">
			<h3 className={isExpanded ? "border-b" : undefined}>
				<button
					onClick={handleCardClick}
					id={`contact-accordion-header-${id}`}
					aria-expanded={isExpanded}
					aria-controls={`contact-accordion-panel-${id}`}
					className="flex flex-row items-center space-x-5 p-4 pr-6 w-full">
					<div className="flex flex-col w-12 h-12 border bg-default-contrast	text-default-contrast-foreground">
						<UserIcon className="w-6 h-6 m-auto" />
					</div>
					<div className="block flex-1 text-left">
						<div className="sr-only">Contact {index} ,</div>
						<p className={`font-bold text-primary ${isExpanded ? "text-lg" : "text-sm"}`}>
							{firstName} {lastName}
						</p>
						{!isExpanded && (
							<>
								<div className="sr-only">, Phone Number</div>
								<p className="text-sm mt-1">{formatPhoneNumber(phoneNumber)}</p>
							</>
						)}
					</div>
					{isExpanded ? (
						<ChevronUpIcon className="w-5 h-5" />
					) : (
						<ChevronDownIcon className="w-5 h-5" />
					)}
				</button>
			</h3>
			{isExpanded && (
				<section
					role="region"
					className="flex flex-col"
					aria-hidden={!isExpanded}
					id={`contact-accordion-panel-${id}`}
					aria-labelledby={`contact-accordion-header-${id}`}
					onClick={(e) => e.stopPropagation()}>
					<div className="flex flex-col space-y-5 p-5" aria-label="Contact Details">
						<div>
							<h4
								aria-label="Phone Number"
								className="mb-1 font-bold uppercase text-heading text-xs">
								Phone Number
							</h4>
							<p>{formatPhoneNumber(phoneNumber)}</p>
						</div>
						<div>
							<h4
								aria-label="Email Address"
								className="mb-1 font-bold uppercase text-heading text-xs">
								Email Address
							</h4>
							<p>{email}</p>
						</div>
					</div>
					<footer aria-label={`Contact ${index} controls`}>
						<nav className="w-full flex flex-row items-center justify-between p-4 space-x-5 border-t border-default">
							<IconButton
								variant="danger-contrast"
								aria-label="Delete Contact"
								onClick={() => confirmAndDelete(id)}>
								<TrashIcon className="w-5 h-5" />
							</IconButton>
							<Button variant="default" aria-label="Edit Contact" href={`/contact/${id}`}>
								<PencilIcon className="w-4 h-4" />
								Edit
							</Button>
						</nav>
					</footer>
				</section>
			)}
		</li>
	);
};

export default ContactCard;
