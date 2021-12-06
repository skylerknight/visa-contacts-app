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
					<div className="w-16 h-16 lg:w-24 lg:h-24 flex flex-row m-auto rounded-lg bg-primary-contrast text-primary-contrast-foreground">
						<UserIcon className="w-8 h-8 lg:w-14 lg:h-14 m-auto" />
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
				<div className="grid grid-cols-2 gap-5 pt-2.5">
					<Button variant="default" href="/">
						Cancel
					</Button>
					<Button variant="primary" aria-label="Save Contact Information">
						Save Contact
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
