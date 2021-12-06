import React from "react";
import Link from "next/link";
import Button from "../buttons/Button";
import ContactFormInput from "./ContactFormInput";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useContacts } from "../../contexts/contact";
import { FormProvider, useForm } from "react-hook-form";

import { TrashIcon, UserIcon } from "@heroicons/react/outline";

const ContactForm = ({ id, email, firstName, lastName, phoneNumber }) => {
	const methods = useForm();
	const router = useRouter();
	const { contactsDispatch, confirmAndDelete } = useContacts();

	const onSubmit = (data, e) => {
		e.preventDefault();
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

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				aria-label="Contact Information"
				className="flex flex-col space-y-5 w-full lg:space-y-8">
				<div className="flex flex-row my-5">
					<div className="w-24 h-24 flex flex-row m-auto bg-primary-contrast text-primary-contrast-foreground">
						<UserIcon className="w-14 h-14 m-auto" />
					</div>
				</div>
				<div className="grid grid-flow-row gap-5 lg:grid-flow-col lg:gap-8">
					<ContactFormInput name="firstName" label="First Name" defaultValue={firstName} />
					<ContactFormInput name="lastName" label="Last Name" defaultValue={lastName} />
				</div>
				<div>
					<ContactFormInput
						type="tel"
						name="phoneNumber"
						label="Phone Number"
						defaultValue={phoneNumber}
					/>
				</div>
				<div>
					<ContactFormInput type="email" name="email" label="Email Address" defaultValue={email} />
				</div>
				<div className="flex flex-row items-center justify-end pt-2.5">
					{id != null && (
						<Button variant="danger-contrast" onClick={() => confirmAndDelete(id)}>
							<TrashIcon className="w-5 h-5" /> Delete
						</Button>
					)}
					<div className="flex flex-row space-x-5  ml-auto">
						<Button variant="default" href="/">
							Cancel
						</Button>
						<Button variant="primary">Save Contact</Button>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
