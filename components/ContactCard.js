import React from "react";

const ContactCard = ({ id, email, firstName, lastName, phoneNumber }) => {
	return (
		<li className="flex flex-row items-center space-x-5 p-3 shadow-md bg-white">
			{/* Avatar */}
			<div className="w-12 h-12 rounded-full bg-gray-100"></div>
			{/* Full Name */}
			<div>
				<h3 className="font-bold text-sm">
					{firstName} {lastName}
				</h3>
				<ul className="mt-1">
					<li className="text-sm text-gray-400">{phoneNumber}</li>
				</ul>
			</div>
		</li>
	);
};

export default ContactCard;
