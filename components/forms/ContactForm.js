import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useContacts } from "../../contexts/contact";
import { FormProvider, useForm } from "react-hook-form";
import ContactFormInput from "./ContactFormInput";

const ContactForm = ({ id, email, firstName, lastName, phoneNumber }) => {
	const router = useRouter();
	const { contactsDispatch } = useContacts();
	const [isEdit, setIsEdit] = React.useState(id !== undefined);

	const methods = useForm();

	const onSubmit = (data) => {
		const payload = {
			id: isEdit ? id : uuidv4(),
			...data,
		};

		if (isEdit) {
			contactsDispatch({ type: "UPDATE_CONTACT", payload });
		} else {
			contactsDispatch({ type: "CREATE_CONTACT", payload });
		}

		router.push("/");
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col space-y-5 p-5">
				<div className="flex flex-row space-x-5">
					<ContactFormInput name="firstName" label="First Name" defaultValue={firstName} />
					<ContactFormInput name="lastName" label="Last Name" defaultValue={lastName} />
				</div>
				<div>
					<ContactFormInput name="phoneNumber" label="Phone Number" defaultValue={phoneNumber} />
				</div>
				<div>
					<ContactFormInput name="email" label="Email Address" defaultValue={email} />
				</div>
				<div className="flex flex-row space-x-5 pt-5">
					<Link href="/">
						<button
							type="button"
							className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-gray-500 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
							Cancel
						</button>
					</Link>
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
						{isEdit ? "Update Contact" : "Create Contact"}
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
