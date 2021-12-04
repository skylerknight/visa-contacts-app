import React from "react";
import { useFormContext } from "react-hook-form";

const ContactFormInput = ({ name, label, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="flex-1">
			<label htmlFor={name} className="block text-xs font-bold uppercase text-[#242424]">
				{label}
			</label>
			<div className="mt-3">
				<input
					id={name}
					name={name}
					type={name}
					autoComplete={name}
					defaultValue={defaultValue || ""}
					{...register(name, { required: true })}
					className="appearance-none block w-full p-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm"
				/>
				{errors.firstName && (
					<p className="text-sm font-bold text-red-500">This field is required</p>
				)}
			</div>
		</div>
	);
};

export default ContactFormInput;
