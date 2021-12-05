import React from "react";
import Link from "next/link";
import Button from "../components/Button";

import {
	ChevronDownIcon,
	ChevronUpIcon,
	PencilIcon,
	PhoneIcon,
	TrashIcon,
	MailIcon,
	UserIcon,
} from "@heroicons/react/outline";

const ContactCard = ({ id, email, firstName, lastName, phoneNumber }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCardClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<article className="border border-default shadow-sm overflow-hidden" onClick={handleCardClick}>
			<header className="flex flex-row items-center justify-center space-x-5 p-4">
				<div className="flex flex-col w-12 h-12 rounded-full bg-default-light	">
					<UserIcon className="w-6 h-6 m-auto text-default-foreground" />
				</div>

				<div className="flex-1">
					<h3 className={`font-bold ${isExpanded ? "text-lg" : "text-sm"}`}>
						{firstName} {lastName}
					</h3>
					{!isExpanded && <p className="text-sm mt-1">{phoneNumber}</p>}
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
				<div className="flex flex-col">
					<ul className="px-6 py-5 space-y-5">
						<li className="text-sm flex flex-row items-center justify-between">
							<div className="flex flex-col">
								<label className="mb-2 text-xs">Phone Number</label>
								{phoneNumber}
							</div>
						</li>
						<li className="text-sm flex flex-row items-center justify-between">
							<div className="flex flex-col">
								<label className="mb-2 text-xs">Email Address</label>
								{email}
							</div>
						</li>
					</ul>
					<div className="w-full flex flex-row items-center justify-between p-4 space-x-5 border-t border-default">
						<button type="button" className="icon-btn-danger-contrast">
							<TrashIcon className="w-5 h-5" />
						</button>
						<Link href={`/contact/${id}`}>
							<button type="button" className="btn-default">
								<PencilIcon className="w-4 h-4" />
								Edit
							</button>
						</Link>
					</div>
				</div>
			)}
		</article>
	);
};

export default ContactCard;
