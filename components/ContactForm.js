import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useContacts } from "../contexts/contact";

const ContactForm = ({ id, email, firstName, lastName, phoneNumber }) => {
	const router = useRouter();
	const { contactsDispatch } = useContacts();
	const [isEdit, setIsEdit] = React.useState(id !== undefined);

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm();

	const onSubmit = (data) => {
		const payload = {
			id: isEdit ? id : Math.floor(Math.random() * 100),
			...data,
		};

		if (isEdit) {
			contactsDispatch({ type: "UPDATE_CONTACT", payload });
		} else {
			contactsDispatch({ type: "CREATE_CONTACT", payload });
		}

		router.push("/");
	};

	const onError = (errors) => {
		console.log(errors);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				id="firstName"
				name="firstName"
				placeholder="First Name"
				defaultValue={firstName || ""}
				{...register("firstName", { required: true })}
			/>
			{errors.firstName && <span>This field is required</span>}

			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Last Name"
				defaultValue={lastName || ""}
				{...register("lastName", { required: true })}
			/>
			{errors.lastName && <span>This field is required</span>}

			<label htmlFor="phoneNumber">Phone Number</label>
			<input
				type="tel"
				id="phoneNumber"
				name="phoneNumber"
				placeholder="Phone Number"
				defaultValue={phoneNumber || ""}
				{...register("phoneNumber", {
					required: true,
				})}
			/>
			{errors.phoneNumber && <span>This field is required</span>}

			<button type="submit">{isEdit ? "Update Contact" : "Create Contact"}</button>
		</form>
	);
};

export default ContactForm;
