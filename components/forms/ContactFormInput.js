import React from "react";
import validator from "validator";
import { useFormContext } from "react-hook-form";

const ContactFormInput = ({ type, name, label, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const validate = (value) => {
		switch (type) {
			case "text":
				return validator.isEmpty(value);
			case "email":
				return validator.isEmail(value);
			case "tel":
				return validator.isMobilePhone(value);
			case "number":
				return validator.isNumeric(value);
			default:
				return true;
		}
	};

	return (
		<div className="flex-1">
			<label htmlFor={name} className="text-xs">
				{label}
			</label>
			<div className="mt-2">
				<input
					id={name}
					name={name}
					type={type || "text"}
					autoComplete={name}
					defaultValue={defaultValue || ""}
					aria-describedby={`${name}-description`}
					{...register(name, { required: true, validate: (v) => validate(v) })}
				/>
				{errors[name] && (
					<p className="text-xs p-2 mt-1 text-center bg-warning-contrast text-warning-contrast-foreground">
						Please enter a valid {label}
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactFormInput;
