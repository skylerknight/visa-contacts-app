import React from "react";
import { useFormContext } from "react-hook-form";

const ContactFormInput = ({ name, label, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="flex-1">
			<label htmlFor={name} className="text-xs">
				{label}
			</label>
			<div className="mt-2">
				<input
					id={name}
					name={name}
					type="text"
					autoComplete={name}
					defaultValue={defaultValue || ""}
					aria-describedby={`${name}-description`}
					{...register(name, { required: true })}
				/>
				{errors.firstName && (
					<p className="text-xs p-2 mt-1 text-center bg-warning-contrast text-warning-contrast-foreground">
						This field is required
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactFormInput;
