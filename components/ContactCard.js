import React from "react";
import Link from "next/link";

import { ChevronDownIcon } from "@heroicons/react/solid";

const ContactCard = ({ id, email, firstName, lastName, phoneNumber }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCardClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<li
			className="flex flex-row items-center space-x-5 p-4 border bg-white"
			onClick={handleCardClick}>
			{/* Avatar */}
			<div className="flex flex-col w-12 h-12 rounded-full bg-yellow-100"></div>
			{/* Full Name */}
			<div className="flex-1">
				<h3 className="font-bold text-sm">
					{firstName} {lastName}
				</h3>
				{isExpanded && (
					<ul className="mt-1">
						<li className="text-sm text-gray-400">{phoneNumber}</li>
						<li className="text-sm text-gray-400">{email}</li>
					</ul>
				)}
			</div>
			{/* Contact Card Controls */}
			<Link href={`/contact/${id}`}>
				<a className="flex w-8 h-8 rounded-full ring-offset-2 ring-blue-800 hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800 focus:ring-2">
					<ChevronDownIcon className="w-5 h-5 m-auto" />
				</a>
			</Link>
		</li>
	);
};

export default ContactCard;
