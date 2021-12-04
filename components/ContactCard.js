import React from "react";
import Link from "next/link";

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
		<article className="border shadow-sm overflow-hidden bg-white" onClick={handleCardClick}>
			{!isExpanded ? (
				<header className="flex flex-row items-center justify-center space-x-5 p-4">
					<div className="flex flex-col w-12 h-12 rounded-full bg-blue-100">
						<UserIcon className="w-6 h-6 m-auto text-blue-800" />
					</div>

					<div className="flex-1">
						<h3 className="font-bold text-sm">
							{firstName} {lastName}
						</h3>
						<ul className="mt-1">
							<li className="text-sm text-gray-400">{phoneNumber}</li>
						</ul>
					</div>
					<Link href={`/contact/${id}`}>
						<a className="flex w-8 h-8">
							<ChevronDownIcon className="w-5 h-5 m-auto" />
						</a>
					</Link>
				</header>
			) : (
				<div className="flex flex-col">
					<header className="flex flex-row items-center justify-center space-x-5 p-4 border-b">
						<div className="flex flex-col w-12 h-12 rounded-full bg-blue-100">
							<UserIcon className="w-6 h-6 m-auto text-blue-800" />
						</div>

						<div className="flex-1">
							<h3 className="font-bold text-lg">
								{firstName} {lastName}
							</h3>
						</div>
						<Link href={`/contact/${id}`}>
							<a className="flex w-8 h-8">
								<ChevronUpIcon className="w-5 h-5 m-auto" />
							</a>
						</Link>
					</header>
					<ul className="p-5 space-y-5">
						<li className="text-sm flex flex-row items-center justify-between text-gray-500">
							<div className="flex flex-col">
								<label className="mb-2 font-bold text-xs uppercase text-[#242424]">
									Phone Number
								</label>
								{phoneNumber}
							</div>
							<button className="w-8 h-8 flex flex-row rounded-full bg-blue-100 text-blue-800">
								<PhoneIcon className="w-5 h-5 m-auto" />
							</button>
						</li>
						<li className="text-sm flex flex-row items-center justify-between text-gray-500">
							<div className="flex flex-col">
								<label className="mb-2 font-bold text-xs uppercase text-[#242424]">
									Email Address
								</label>
								{email}
							</div>
							<button className="w-8 h-8 flex flex-row rounded-full bg-blue-100 text-blue-800">
								<MailIcon className="w-5 h-5 m-auto" />
							</button>
						</li>
					</ul>
					<div className="w-full grid grid-flow-col p-4 space-x-5 border-t">
						<button className="px-4 py-2 flex flex-row items-center justify-center  bg-gray-200">
							Edit
						</button>
						<button className="px-4 py-2 flex flex-row items-center justify-center  border border-red-500 text-red-500">
							Delete
						</button>
					</div>
				</div>
			)}
		</article>
	);
};

export default ContactCard;
