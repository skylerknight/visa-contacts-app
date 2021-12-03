import React from "react";
import { useForm, setValue } from "react-hook-form";
import { useContacts } from "../contexts/contacts";

const ContactForm = ({ id, email, firstName, lastName, phoneNumber }) => {
	const { contacts, setContacts } = useContacts();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm();

	const onSubmit = (data) => {
		setContacts((ps) => [
			...ps,
			{
				id: Math.floor(Math.random() * 100),
				...data,
			},
		]);
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

			<button type="submit">Create Contact</button>
		</form>
	);
};

export default ContactForm;
