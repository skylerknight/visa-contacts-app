import React from "react";
import Link from "next/link";
import ContactFormInput from "./ContactFormInput";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useContacts } from "../../contexts/contact";
import { FormProvider, useForm } from "react-hook-form";

import { TrashIcon, UserIcon } from "@heroicons/react/outline";

const ContactForm = ({ id, email, firstName, lastName, phoneNumber }) => {
	const methods = useForm();
	const router = useRouter();
	const { contactsDispatch } = useContacts();

	const onSubmit = (data) => {
		const payload = {
			id: id || uuidv4(),
			...data,
		};

		if (id == null) {
			contactsDispatch({ type: "CREATE_CONTACT", payload });
		} else {
			contactsDispatch({ type: "UPDATE_CONTACT", payload });
		}

		router.push("/");
	};

	const onDelete = () => {
		contactsDispatch({ type: "DELETE_CONTACT", payload: id });
		router.push("/");
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col space-y-8 w-full">
				<div className="flex flex-row my-5">
					<div className="w-24 h-24 flex flex-row m-auto bg-primary-contrast text-primary-contrast-foreground">
						<UserIcon className="w-14 h-14 m-auto" />
					</div>
				</div>
				<div className="flex flex-col space-y-8 sm:flex-row sm:space-x-5 sm:space-y-0">
					<ContactFormInput name="firstName" label="First Name" defaultValue={firstName} />
					<ContactFormInput name="lastName" label="Last Name" defaultValue={lastName} />
				</div>
				<div>
					<ContactFormInput name="phoneNumber" label="Phone Number" defaultValue={phoneNumber} />
				</div>
				<div>
					<ContactFormInput name="email" label="Email Address" defaultValue={email} />
				</div>
				<div className="flex flex-row items-center justify-end space-x-5 pt-5">
					{id != null && (
						<button type="button" className="btn-danger-contrast mr-auto" onClick={onDelete}>
							<TrashIcon className="w-5 h-5" /> Delete
						</button>
					)}
					<Link href="/">
						<button type="submit" className="btn-default">
							Cancel
						</button>
					</Link>
					<button type="submit" className="btn-primary">
						Save Contact
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
